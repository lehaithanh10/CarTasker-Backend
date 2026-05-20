import { Injectable } from '@nestjs/common';
import { UserRepository } from '@/repositories/user.repository';
import { UpdateUserDto, UpdatePasswordDto } from './dto/user.dto';
import { InvalidCredentialsException } from '@/common/exceptions';
import { PasswordService } from '@/common/services/password.service';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
    private passwordService: PasswordService,
  ) {}

  async findById(userId: string) {
    return this.userRepository.findUnique({ id: userId });
  }

  async updateProfile(userId: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id: userId }, updateUserDto);
  }

  async updatePassword(userId: string, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.userRepository.findUnique({ id: userId });

    if (
      !user ||
      !(await this.passwordService.verify(updatePasswordDto.currentPassword, user.passwordHash))
    ) {
      throw new InvalidCredentialsException('Current password is incorrect');
    }

    const hashedNewPassword = await this.passwordService.hash(updatePasswordDto.newPassword);

    return this.userRepository.update({ id: userId }, { passwordHash: hashedNewPassword });
  }
}
