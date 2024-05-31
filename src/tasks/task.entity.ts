enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}
/* EEN LA PRACTICA SE UTILIZA PARA DEFINIR LA ESTRUCTURA DE UNA TABLE EN UNA BASE */
class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}

export { TaskStatus, Task }

