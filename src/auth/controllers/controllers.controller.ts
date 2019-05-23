import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { RegisterDTO } from '../dto/register.dto';

// Routes
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    // register == user
    @Get('registers')
    async getPosts(@Res() res) {
        const registers = await this.authService.getRegisters();
        return res.status(HttpStatus.OK).json(registers);
    }

    @Get('register/:registerID')
    async getPost(@Res() res, @Param('registerID', new ValidateObjectId()) registerID) {
        const register = await this.authService.getRegister(registerID);
        // tslint:disable-next-line:curly
        if (!register) throw new NotFoundException('register does not exist!');
        return res.status(HttpStatus.OK).json(register);

    }

    @Post('/register')
    async addPost(@Res() res, @Body() registerDTO: RegisterDTO) {
        const newRegister = await this.authService.addRegister(registerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Register has been submitted successfully!',
            post: newRegister,
        });
    }

    @Put('/edit')
    async editPost(
        @Res() res,
        @Query('registerID', new ValidateObjectId()) registerID,
        @Body() registerDTO: RegisterDTO,
    ) {
        const editedRegister = await this.authService.editRegister(registerID, registerDTO);
        if (!editedRegister) { throw new NotFoundException('register does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'register has been successfully updated',
            post: editedRegister,
        });
    }

    @Delete('/delete')
    async deleteRegister(@Res() res, @Query('registerID', new ValidateObjectId()) registerID) {
        const deletedRegister = await this.authService.deleteRegister(registerID);
        if (!deletedRegister) { throw new NotFoundException('Post does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted!',
            post: deletedRegister,
        });
    }
}
