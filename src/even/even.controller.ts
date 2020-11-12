import { Controller, Get, Param, Post, Body, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { AskingNumberDto } from './dto/asking-number.dto';
import { EvenService } from './even.service';

@Controller('even')
export class EvenController {
    
    constructor(private evenService: EvenService) {}

    @Get('/askeds')
    getAllAkeds() {
        return this.evenService.getAskedQueue()
    }
    
    @Get('/:asked')
    askNumberIsEven(@Param('asked') asked) {
        return this.evenService.askNumberIsEven({asked});
    }

    @Post()
    @UsePipes(ValidationPipe)
    queryAskNumberIsEven(@Body() askingNumberDto: AskingNumberDto):boolean {
        return this.evenService.askNumberIsEven(askingNumberDto);
    }

}
