import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './models/user.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [User], { name: 'users', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.user.findMany();
  }
}
