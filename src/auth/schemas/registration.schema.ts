import * as mongoose from 'mongoose';

export const RegistrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
