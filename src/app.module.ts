import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UserController } from './user/user.controller';


@Module({
  imports: [TasksModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
