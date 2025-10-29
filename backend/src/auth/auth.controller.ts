import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() userData: any) {
    return this.authService.register(userData);
  }

  @Post('login')
  login(@Body() { email, password }: any) {
    return this.authService.validateUser(email, password)
      .then((user) => this.authService.login(user));
  }
}
