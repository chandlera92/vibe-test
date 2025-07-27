import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService', 'CreateTodo')
  async createTodo(data: { title: string; userId: number }) {
    const todo = await this.todoService.create(data.title, data.userId);
    return { id: todo.id, title: todo.title, completed: todo.completed };
  }

  @GrpcMethod('TodoService', 'ListTodos')
  async listTodos() {
    const todos = await this.todoService.findAll();
    return { todos: todos.map(t => ({ id: t.id, title: t.title, completed: t.completed })) };
  }
}
