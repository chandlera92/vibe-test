import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Team } from './team.entity';
import { User } from './user.entity';

export enum TeamRole {
  OWNER = 'owner',
  MEMBER = 'member',
}

@Entity()
export class TeamMember {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Team)
  team!: Team;

  @ManyToOne(() => User)
  user!: User;

  @Property()
  role: TeamRole = TeamRole.MEMBER;
}
