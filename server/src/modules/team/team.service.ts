import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Team } from '../../entities/team.entity';
import { User } from '../../entities/user.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly repo: EntityRepository<Team>,
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
  ) {}

  async create(name: string, ownerId: number): Promise<Team> {
    const owner = await this.userRepo.findOne({ id: ownerId });
    const team = this.repo.create({ name, owner: owner! });
    await this.repo.persistAndFlush(team);
    return team;
  }
}
