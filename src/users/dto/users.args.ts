import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class UsersArgs {
  id?: string;
}
