import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserRepository, User } from '@/repositories/user.repository';
import { RegisterDto, LoginDto, AuthResponseDto } from './dto/auth.dto';
import { UserAlreadyExistsException, InvalidCredentialsException } from '@/common/exceptions';
import { PasswordService } from '@/common/services/password.service';
import { UserMapper } from '@/users/mappers/user.mapper';

const DEFAULT_ACCESS_TOKEN_TTL = '24h';
const DEFAULT_REFRESH_TOKEN_TTL = '7d';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private passwordService: PasswordService,
    private configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const existingUser = await this.userRepository.findByEmail(registerDto.email);

    if (existingUser) {
      throw new UserAlreadyExistsException();
    }

    const hashedPassword = await this.passwordService.hash(registerDto.password);

    const user = await this.userRepository.create({
      email: registerDto.email,
      passwordHash: hashedPassword,
      fullName: registerDto.fullName,
      phone: registerDto.phone || null,
      role: registerDto.role,
    });

    return this.buildAuthResponse(user);
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByEmail(loginDto.email);

    if (!user || !(await this.passwordService.verify(loginDto.password, user.passwordHash))) {
      throw new InvalidCredentialsException();
    }

    return this.buildAuthResponse(user);
  }

  async refreshToken(refreshToken: string): Promise<AuthResponseDto> {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.userRepository.findByIdWithSelect(payload.sub);

      if (!user) {
        throw new InvalidCredentialsException();
      }

      return this.buildAuthResponse(user);
    } catch {
      throw new InvalidCredentialsException();
    }
  }

  validateUser(userId: string) {
    return this.userRepository.findByIdWithSelect(userId);
  }

  private buildAuthResponse(user: User): AuthResponseDto {
    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user);
    return UserMapper.toAuthResponse(user, accessToken, refreshToken);
  }

  private generateAccessToken(user: User): string {
    return this.signToken(user, this.getTtl('AUTH_ACCESS_TOKEN_TTL', DEFAULT_ACCESS_TOKEN_TTL));
  }

  private generateRefreshToken(user: User): string {
    return this.signToken(user, this.getTtl('AUTH_REFRESH_TOKEN_TTL', DEFAULT_REFRESH_TOKEN_TTL));
  }

  private signToken(user: User, expiresIn: string): string {
    return this.jwtService.sign({ email: user.email, role: user.role }, {
      subject: user.id,
      expiresIn,
    } as any);
  }

  private getTtl(key: string, fallback: string): string {
    return this.configService.get<string>(key) ?? fallback;
  }
}
