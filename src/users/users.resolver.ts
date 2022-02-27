import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
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

  @Mutation(() => User, { name: 'createUser', nullable: true })
  async createUser(
    @Args('newUserData') newUserData: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(newUserData);
  }
}
