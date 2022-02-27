import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, Max, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsString()
  @Max(15)
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
