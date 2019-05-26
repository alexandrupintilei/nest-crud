import { Document } from 'mongoose';

export interface Dog extends Document {
    readonly name: string;
    readonly age: string;
    readonly color: string;
}
