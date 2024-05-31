import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';


@Injectable() /*    INJECTAR EN OTRAS CLASES */
export class TasksService {

    private tasks: Task[] = [{
        id: "1",
        title: "Prueba",
        description: "Prueba",
        status: TaskStatus.PENDING
    }]

    getAllTask() {
        return this.tasks;
    }

    createTask(title: string, description: string) {
        const newTask = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(newTask)
        return newTask;
    }

    updateTask() { }

    deleteTask() { }
}