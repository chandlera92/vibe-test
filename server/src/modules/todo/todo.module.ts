import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TodoItem } from '../../entities/todo-item.entity';
import { User } from '../../entities/user.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [MikroOrmModule.forFeature([TodoItem, User])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
