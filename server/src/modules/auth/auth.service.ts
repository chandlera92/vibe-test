import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from '../../entities/user.entity';
import { Profile } from 'passport-google-oauth20';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly users: EntityRepository<User>,
  ) {}

  async validateGoogle(profile: Profile): Promise<User> {
    let user = await this.users.findOne({ googleId: profile.id });
    if (!user) {
      user = this.users.create({
        googleId: profile.id,
        email: profile.emails?.[0]?.value ?? '',
        name: profile.displayName,
      });
      await this.users.persistAndFlush(user);
    }
    return user;
  }
}
