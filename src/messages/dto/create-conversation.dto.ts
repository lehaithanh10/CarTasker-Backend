import { IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationDto {
  @ApiProperty({
    description: 'Job ID to start the conversation about',
    format: 'uuid',
  })
  @IsNotEmpty()
  @IsUUID()
  jobId: string;

  @ApiProperty({
    description: 'The other party (recipient) user ID',
    format: 'uuid',
  })
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
