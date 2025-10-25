import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator"

export class CreateWishDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    link: string;

}
