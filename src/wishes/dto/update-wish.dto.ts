import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator"
import { PartialType } from '@nestjs/mapped-types';
import { CreateWishDto } from './create-wish.dto';
import { Priority } from "src/generated/enums";

export class UpdateWishDto extends PartialType(CreateWishDto) {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    link: string;

    @IsBoolean()
    isCompleted: boolean;

    @IsEnum(Priority)
    @IsOptional()
    priority?: Priority = Priority.LOW;
}
