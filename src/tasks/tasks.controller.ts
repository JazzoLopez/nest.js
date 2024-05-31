import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    /*  DECORADOR PARA HACER UNA PETICION GET A LA RUTA TASKS */
    @Get()
    helloWord(){
        return "hoal"
    }
}
