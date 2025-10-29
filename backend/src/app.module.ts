import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';


@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123.',
      database: 'ecommerce',
      entities: [User],
      synchronize: true, // ⚠️ Solo para desarrollo
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
