import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @ApiProperty()
  @Prop()
  projectId: string;

  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  category: string;

  @ApiProperty()
  @Prop([String])
  tags: string[];

  @ApiProperty()
  @Prop()
  ownerId: string;

  @ApiProperty()
  @Prop()
  size: string;

  @ApiProperty()
  @Prop([String])
  files: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
