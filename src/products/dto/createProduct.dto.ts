import { IsNotEmpty, IsNumber } from "class-validator";

export class createProductDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber({ maxDecimalPlaces: 2 })
    price: number;
}