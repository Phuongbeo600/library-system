import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BooksService {

  constructor(private readonly db: DatabaseService) { }

  async create(createBookDto: CreateBookDto) {
    return await this.db.book.create({
      data: createBookDto,
    });
  }

  async findAll() {
    return await this.db.book.findMany();
  }

  async findOne(id: number) {
    const book = await this.db.book.findUnique({
      where: { id },
    });
    if (!book) {
      throw new NotFoundException(`Không tìm thấy sách với ID #${id}`);
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    await this.findOne(id);

    return await this.findOne(id);

    return await this.db.book.update({
      where: { id },
      data: updateBookDto,
    });

  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.db.book.delete({
      where: { id }
    });
  }
}
