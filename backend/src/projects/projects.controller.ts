import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Project } from './entities/project.entity';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('/create')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  createThreedModel(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() payload: CreateProjectDto,
  ): Promise<Project> {
    return this.projectsService.createThreedModel(payload, files);
  }

  @Get()
  findAll() {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.getProjectById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.updateProject(id, updateProjectDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectsService.remove(+id);
  // }
}
