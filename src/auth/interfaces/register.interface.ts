import { Document } from 'mongoose';

export interface Register extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
}
