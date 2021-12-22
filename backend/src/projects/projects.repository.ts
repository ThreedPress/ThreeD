import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectsRepository {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>,
  ) {}

  async findOne(userFilterQuery: FilterQuery<Project>): Promise<Project> {
    return this.projectModel.findOne(userFilterQuery);
  }

  async find(projectFilterQuery: FilterQuery<Project>): Promise<Project[]> {
    return this.projectModel.find(projectFilterQuery);
  }

  async create(threedModel: Project): Promise<Project> {
    const newThreedModel = new this.projectModel(threedModel);
    return newThreedModel.save();
  }

  async findOneAndUpdate(
    projectFilterQuery: FilterQuery<Project>,
    project: Partial<Project>,
  ): Promise<Project> {
    return this.projectModel.findOneAndUpdate(projectFilterQuery, project);
  }
}
