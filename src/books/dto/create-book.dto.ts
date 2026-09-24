import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên sách không được để trống' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Tác giả không được để trống' })
  author: string;
}
