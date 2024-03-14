// project/dto/update-project.dto.ts
import { IsOptional, IsNotEmpty, IsDateString } from 'class-validator';

export class UpdateProjectDto {

  @IsOptional()
  name?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  owner?: string;

  @IsOptional()
  status?: string;
}
