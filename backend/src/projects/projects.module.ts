import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './entities/project.entity';
import { ProjectsRepository } from './projects.repository';
import { AssetsService } from '../assets/assets.service';
import { AssetsModule } from '../assets/assets.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    AssetsModule,
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsRepository, AssetsService],
})
export class ProjectsModule {}
