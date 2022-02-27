import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
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
  async getUser(@Args('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.findById(id);
  }

  @Mutation(() => User, { name: 'createUser', nullable: true })
  async createUser(
    @Args('newUserData') newUserData: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(newUserData);
  }

  @Mutation(() => User, { name: 'updateUser', nullable: true })
  async updateUser(
    @Args('id', new ParseUUIDPipe()) id: string,
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUserData);
  }

  @Mutation(() => User, { name: 'deleteUser', nullable: true })
  async deleteUser(@Args('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.destroy(id);
  }
}
