import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
// http://localhost:3000/auth
@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService){}
    // REST API trabalha com verbos, que representam ações (GET - Todos; GET - 1; POST - Cadastro; PUT/PATCH - alteração; Delete - Exclusão). O get sempre vem 2 vezes (getAll e getOne)
    // http://localhost:3000/auth/login
    @Post('login')
    async authLogin(@Body() req){
        const {login, password} = req;
        console.log('Login: ', login);
        console.log('Senha: ', password);
        return this.authService.authLogin(login, password);
    }
}
