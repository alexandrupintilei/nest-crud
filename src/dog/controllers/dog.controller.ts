import { DogService } from '../services/dog.service';
import { DogDTO } from '../dto/dog.dto';
import { Controller, Res, HttpStatus, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { ValidateObjectId } from 'src/auth/shared/pipes/validate-object-id.pipes';

@Controller('my-dog')
export class DogController {

  constructor(private dogService: DogService) {}

  @Post('add-dog')
  async addDog(@Res() res, @Body() dogDTO: DogDTO) {
      const newDog = await this.dogService.addDog(dogDTO);
      return res.status(HttpStatus.OK).json({
          message: 'Dog has been submitted successfully!',
          post: newDog,
      });
  }

  @Get('dogs')
  async getDogs(@Res() res) {
    const dogs = await this.dogService.getDogs();
    return res.status(HttpStatus.OK).json(dogs);
  }

  @Get('dog/:dogID')
  async getDog(@Res() res, @Param('dogID', new ValidateObjectId()) dogID) {
    const dog = await this.dogService.getDog(dogID);
    if (!dog) { throw new NotFoundException('Dog does not exist!'); }
    return res.status(HttpStatus.OK).json(dog);
  }
}
