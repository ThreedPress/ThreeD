export class UpdateProjectDto {
  title: string;
  description: string;
  category: string;
  tags: string[];
  ownerId: string;
  size: string;
  files: any[];
}
