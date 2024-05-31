import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    /*  DECORADOR PARA HACER UNA PETICION GET A LA RUTA TASKS */
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTask();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() body: createTaskDto) {
        return this.tasksService.createTask(body.title, body.description);
    }

    @Patch(':id') /*  solo unos campos se actualizan  */
    updateTask(@Param('id') id: string, @Body() body: updateTaskDto) {
        return this.tasksService.updateTask(id, body);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    }
}
