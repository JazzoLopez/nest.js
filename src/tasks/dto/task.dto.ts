import { TaskStatus } from "../task.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class createTaskDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    title: string;
    
    @IsString()
    description: string;
}

export class updateTaskDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;
}