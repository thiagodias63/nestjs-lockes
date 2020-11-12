import { Injectable } from '@nestjs/common';
import { AskingNumberDto } from './dto/asking-number.dto';
import { IEven } from './even.model';

@Injectable()
export class EvenService {
    
    private askedQueue:IEven[] = []; 

    askNumberIsEven(askingNumberDto: AskingNumberDto):boolean {
        const { asked } = askingNumberDto;
        this.storageAskedInQueue({asked})
        return asked % 2 === 0;
    }

    getAskedQueue():IEven[] {
        return this.askedQueue
    }

    storageAskedInQueue(asked: IEven):void {
        this.askedQueue.push(asked)
    }
}
