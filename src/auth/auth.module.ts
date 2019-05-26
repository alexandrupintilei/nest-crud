import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from '../auth/schemas/registration.schema';
import { AuthController } from './controllers/register.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Register', schema: RegistrationSchema }]),
 ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
