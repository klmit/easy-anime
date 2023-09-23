import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class GetTopDto {
  @ApiProperty({
    type: String,
    default: 50,
  })
  limit: string;
}
