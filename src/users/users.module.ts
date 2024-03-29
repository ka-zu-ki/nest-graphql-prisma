import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersResolver, PrismaService],
})
export class UsersModule {}
