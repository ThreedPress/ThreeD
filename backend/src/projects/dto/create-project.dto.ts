import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ description: 'Project name' })
  title: string;
  @ApiProperty({ description: 'Project description' })
  description: string;
  @ApiProperty({ description: 'Project category' })
  category: string;
  @ApiProperty({ description: 'Project tags' })
  tags: string[];
  @ApiProperty({ description: 'Project owner id' })
  ownerId: string;
  @ApiProperty({ description: 'Model size' })
  size: string;
  @ApiProperty({
    description: 'Attachments',
    type: 'array',
    items: {
      type: 'file',
      items: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  files: any[];
}
