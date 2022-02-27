import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType()
export class User {
  id: string;
  name: string;
  email: string;
  password: string;

  @Field(() => String)
  role: Role;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
