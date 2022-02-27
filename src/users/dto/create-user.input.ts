import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  @Field(() => String)
  role: Role;
}
