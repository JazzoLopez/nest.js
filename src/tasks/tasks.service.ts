import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';


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

    getTaskById(id: string) : Task{
        return this.tasks.find(task => task.id === id)
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

    updateTask(id:string, updatedFields: updateTaskDto): Task { 
        const isExist = this.getTaskById(id);
        if(isExist){
            const taskUpdated = Object.assign(isExist, updatedFields);
            this.tasks = this.tasks.map(task => task.id === id ? taskUpdated : task);
            return taskUpdated;
        }
        return null;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        return "Task deleted"
    }
}