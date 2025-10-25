import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator"
import { Priority } from "src/generated/enums";

export class CreateWishDto {
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
