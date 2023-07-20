import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    description: 'The fullname of user',
    required: true,
    type: String,
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  readonly fullName: string;

  @ApiProperty({
    description: 'The email of user',
    required: true,
    type: String,
    example: 'johndoe@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'The password of user',
    required: true,
    type: String,
    example: 'johndoe@1234',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
