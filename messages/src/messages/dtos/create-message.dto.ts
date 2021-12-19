import { IsString } from 'class-validator';

export class CreateMessageDto {
    @IsString()
    content: string;
}

// DTO means data transfer object - carries data between two places

// How Validation Pipe Works

// 1. Uses class-transformer to turn the body into an instance of the DTO class
// 2. Uses class-validator to validate the instance
// 3. If there are validation errors, responds immedietely, otherwise provide body to request handler
