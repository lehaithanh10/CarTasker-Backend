import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

const DEFAULT_BCRYPT_ROUNDS = 10;

@Injectable()
export class PasswordService {
  private readonly rounds: number;

  constructor(private readonly configService: ConfigService) {
    const configured = this.configService.get<number>('BCRYPT_ROUNDS');
    this.rounds = configured && configured > 0 ? Number(configured) : DEFAULT_BCRYPT_ROUNDS;
  }

  hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  verify(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
