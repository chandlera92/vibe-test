import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './user.entity';
import { Team } from './team.entity';

@Entity()
export class TodoItem {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property({ default: false })
  completed = false;

  @ManyToOne(() => User)
  owner!: User;

  @ManyToOne(() => Team, { nullable: true })
  team?: Team;
}
