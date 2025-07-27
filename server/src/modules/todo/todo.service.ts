import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { TodoItem } from '../../entities/todo-item.entity';
import { User } from '../../entities/user.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoItem)
    private readonly repo: EntityRepository<TodoItem>,
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
  ) {}

  async create(title: string, userId: number): Promise<TodoItem> {
    const user = await this.userRepo.findOne({ id: userId });
    const todo = this.repo.create({ title, owner: user! });
    await this.repo.persistAndFlush(todo);
    return todo;
  }

  async findAll(): Promise<TodoItem[]> {
    return this.repo.findAll();
  }
}
