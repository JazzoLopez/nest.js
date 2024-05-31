import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    /*  DECORADOR PARA HACER UNA PETICION GET A LA RUTA TASKS */
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTask();
    }

    @Post()
    createTask(@Body() body: createTaskDto) {

        return this.tasksService.createTask(body.title, body.description);
    }
}
