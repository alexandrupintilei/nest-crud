import { Document } from 'mongoose';

export interface Register extends Document {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}
