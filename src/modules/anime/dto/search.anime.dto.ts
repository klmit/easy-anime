import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchAnimeDto {
  @ApiProperty({
    type: String,
    default: 'Атака титанов',
  })
  @IsNotEmpty()
  query: string;

  @ApiProperty({
    type: Number,
    default: 10,
  })
  @IsNumber()
  limit: number;
}
