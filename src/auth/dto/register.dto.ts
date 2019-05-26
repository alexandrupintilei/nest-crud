// define the structure of the data that we want to be able to POST to our server
export class RegisterDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
}
