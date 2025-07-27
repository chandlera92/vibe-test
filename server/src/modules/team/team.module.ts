import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Team } from '../../entities/team.entity';
import { User } from '../../entities/user.entity';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [MikroOrmModule.forFeature([Team, User])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
