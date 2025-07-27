import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  @Unique()
  googleId!: string;

  @Property()
  email!: string;

  @Property()
  name!: string;

  @Property({ onCreate: () => new Date() })
  createdAt!: Date;
}
