// project/dto/create-project.dto.ts
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateProjectDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: string;
 
   @IsNotEmpty()
  owner: string; 
  
}
