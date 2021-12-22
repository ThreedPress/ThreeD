import { Injectable } from '@nestjs/common';
import { AssetsService } from '../assets/assets.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { ProjectsRepository } from './projects.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly projectsRepository: ProjectsRepository,
    private readonly assetsService: AssetsService,
  ) {}

  async getProjectById(projectId: string): Promise<Project> {
    const project = await this.projectsRepository.findOne({ projectId });
    if (project.files) {
      const file_urls = await this.assetsService.getFiles(project.files);
      project.files = file_urls;
    }
    return project;
  }

  async getProjectByName(projectName: string): Promise<Project[]> {
    const projects = await this.projectsRepository.find({ projectName });
    for (const project in projects) {
      if (projects[project].files) {
        const file_urls = await this.assetsService.getFiles(
          projects[project].files,
        );
        projects[project].files = file_urls;
      }
    }
    return projects;
  }

  async getAllProjects(): Promise<Project[]> {
    const projects = await this.projectsRepository.find({});
    for (const project in projects) {
      const file_urls = await this.assetsService.getFiles(
        projects[project].files,
      );
      projects[project].files = file_urls;
    }
    return projects;
  }

  async createProject(
    payload: CreateProjectDto,
    files: Array<Express.Multer.File>,
  ): Promise<Project> {
    const file_list = [];
    const proj_uuid = uuidv4();
    for (const file of files) {
      const uploaded = await this.assetsService.startUpload(
        `${proj_uuid}/${file.originalname}`,
        file.buffer,
      );
      file_list.push(uploaded.Key);
    }

    return this.projectsRepository.create({
      projectId: proj_uuid,
      title: payload.title,
      description: payload.description,
      category: payload.category,
      tags: payload.tags,
      ownerId: payload.ownerId,
      size: payload.size,
      files: file_list,
    });
  }

  // async updateProject(
  //   projectId: string,
  //   projectUpdates: UpdateProjectDto,
  // ): Promise<Project> {
  //   return this.projectsRepository.findOneAndUpdate(
  //     { projectId },
  //     projectUpdates,
  //   );
  // }
}
