import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogService } from './services/dog.service';
import { DogController } from './controllers/dog.controller';
import { DogSchema } from './schemas/dog.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Dog', schema: DogSchema }]),
    ],
    providers: [DogService],
    controllers: [DogController],
})

export class DogModule {}
