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
import { ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('/create')
  @UseInterceptors(FilesInterceptor('files', 30))
  @ApiConsumes('multipart/form-data')
  createProject(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() payload: CreateProjectDto,
  ): Promise<Project> {
    return this.projectsService.createProject(payload, files);
  }

  @Get()
  findAll() {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.getProjectById(id);
  }

  // @Patch(':id')
  // @UseInterceptors(FilesInterceptor('files', 30))
  // @ApiConsumes('multipart/form-data')
  // update(
  //   @Param('id') id: string,
  //   @UploadedFiles() files: Array<Express.Multer.File>,
  //   @Body() updateProjectDto: UpdateProjectDto,
  // ) {
  //   return this.projectsService.updateProject(id, updateProjectDto, files);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectsService.remove(+id);
  // }
}
