import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TeamService } from './team.service';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @GrpcMethod('TeamService', 'CreateTeam')
  async createTeam(data: { name: string; ownerId: number }) {
    const team = await this.teamService.create(data.name, data.ownerId);
    return { id: team.id, name: team.name };
  }
}
