import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
