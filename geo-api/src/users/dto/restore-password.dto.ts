import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class RestorePasswordDto {
    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'user1@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Código de restauración',
        example: '123456'
    })
    @IsNumber()
    @IsNotEmpty()
    code: string;

    @ApiProperty({
        description: 'Nueva contraseña del usuario',
        example: 'password1234'
    })
    @IsString()
    @IsNotEmpty()
    newPassword: string;
}