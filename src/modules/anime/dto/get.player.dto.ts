import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetPlayerDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
