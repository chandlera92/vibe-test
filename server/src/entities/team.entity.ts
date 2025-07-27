import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './user.entity';
import { TeamMember } from './team-member.entity';

@Entity()
export class Team {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne(() => User)
  owner!: User;

  @OneToMany(() => TeamMember, member => member.team)
  members = new Collection<TeamMember>(this);
}
