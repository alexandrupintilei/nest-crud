import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [
    DogModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/auth', { useNewUrlParser: true }),
    MongooseModule.forRoot('mongodb://localhost/dog', { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
