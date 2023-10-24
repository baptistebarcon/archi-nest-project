import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'my-secret',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
