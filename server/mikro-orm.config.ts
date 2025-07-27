import { Options } from '@mikro-orm/core';
import { Team } from './src/entities/team.entity';
import { TeamMember } from './src/entities/team-member.entity';
import { TodoItem } from './src/entities/todo-item.entity';
import { User } from './src/entities/user.entity';

const config: Options = {
  type: 'postgresql',
  dbName: process.env.DB_NAME ?? 'todo',
  user: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASS ?? 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  entities: [User, Team, TeamMember, TodoItem],
};

export default config;
