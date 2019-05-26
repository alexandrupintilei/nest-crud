import * as mongoose from 'mongoose';

export const RegistrationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
