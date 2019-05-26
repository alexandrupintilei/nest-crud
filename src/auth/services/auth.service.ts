import { Register } from './../interfaces/register.interface';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from '../dto/register.dto';

@Injectable()
export class AuthService {

    constructor(@InjectModel('Register') private readonly registerModel: Model<Register>) { }

    async getRegisters(): Promise<Register[]> {
        const registers = await this.registerModel.find().exec();
        return registers;
    }

    async getRegister(registerID): Promise<Register> {
        const register = await this.registerModel
            .findById(registerID)
            .exec();
        return register;
    }

    async addRegister(registerDTO: RegisterDTO): Promise<Register> {
        const newregister = await this.registerModel(registerDTO);
        return newregister.save();
    }

    async editRegister(registerID, registerDTO: RegisterDTO): Promise<Register> {
        const editedregister = await this.registerModel
            .findByIdAndUpdate(registerID, registerDTO, { new: true });
        return editedregister;
    }

    async deleteRegister(registerID): Promise<any> {
        const deletedregister = await this.registerModel
            .findByIdAndRemove(registerID);
        return deletedregister;
    }

}
