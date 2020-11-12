import { IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator'

export class AskingNumberDto {

    @IsInt()
    asked: number;
}