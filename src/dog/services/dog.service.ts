import { DogDTO } from '../dto/dog.dto';
import { Dog } from '../interfaces/dog.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DogService {

    constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog>) {}

    async addDog(dogDTO: DogDTO): Promise<Dog> {
        const newDog = await this.dogModel(dogDTO);
        return newDog.save();
    }

    async getDogs(): Promise<Dog[]> {
        const dogs = await this.dogModel.find().exec();
        return dogs;
    }

    async getDog(dogID): Promise<Dog> {
        const dog = await this.dogModel.findById(dogID).exec();
        return dog;
    }
}
