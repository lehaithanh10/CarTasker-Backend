import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/repositories/user.repository';
import { UpdateUserDto, UpdatePasswordDto } from './dto/user.dto';
import { InvalidCredentialsException } from '@/common/exceptions';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findById(userId: string) {
    return this.userRepository.findUnique({ id: userId });
  }

  async updateProfile(userId: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id: userId }, updateUserDto);
  }

  async updatePassword(userId: string, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.userRepository.findUnique({ id: userId });

    if (!user || !(await bcrypt.compare(updatePasswordDto.currentPassword, user.passwordHash))) {
      throw new InvalidCredentialsException('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(updatePasswordDto.newPassword, 10);

    return this.userRepository.update(
      { id: userId },
      { passwordHash: hashedNewPassword }
    );
  }
}
