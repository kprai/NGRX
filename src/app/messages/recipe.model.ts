import { Content } from '../shared/content.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public contents: Content[];

  constructor(name: string, desc: string, 
    imagePath: string, contents: Content[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.contents = contents;
  }
}
