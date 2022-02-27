import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersArgs } from './dto/users.args';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users', nullable: true })
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() args: UsersArgs) {
    return this.usersService.findById(args.id);
  }

  @Query(() => User)
  async createUser() {
    return '';
  }
}
