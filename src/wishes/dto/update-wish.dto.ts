import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator"
import { PartialType } from '@nestjs/mapped-types';
import { CreateWishDto } from './create-wish.dto';

export class UpdateWishDto extends PartialType(CreateWishDto) {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    link: string;

}
