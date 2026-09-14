import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  private users = [
    { id: 1, name: 'Alice', email: 'alice@gmail.com', role: 'ADMIN' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com', role: 'INTERN' },
  ];

  findAll(role?: 'GUEST' | 'LIBRARIAN' | 'ADMIN') {
    if (role) {
      return this.users.filter(user => user.role === role)
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id)
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
