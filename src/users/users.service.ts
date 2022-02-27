import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    const user = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) throw new NotFoundException();
    return user;
  }

  async create(newUserData: CreateUserInput): Promise<User> {
    const { name, email, password, role } = newUserData;
    const user = this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: role,
      },
    });
    return user;
  }

  async update(id: string, updateUserData: UpdateUserInput): Promise<User> {
    const { name, email, password, role } = updateUserData;
    const user = this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        password: password,
        role: role,
      },
    });
    return user;
  }
}
