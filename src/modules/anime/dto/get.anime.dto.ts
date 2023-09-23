import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetAnimeDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
