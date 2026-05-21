import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateMessageDto {
  @ApiProperty({
    description: 'Message content',
    example: 'I can complete this job by 2 PM today.',
    minLength: 1,
    maxLength: 2000,
  })
  @Transform(({ value }) => value?.trim?.())
  @IsString()
  @IsNotEmpty()
  @MinLength(1, { message: 'Message cannot be empty or whitespace only' })
  @MaxLength(2000, { message: 'Message cannot exceed 2000 characters' })
  messageText: string;
}
