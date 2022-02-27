import { ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType()
export class Post {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
}
