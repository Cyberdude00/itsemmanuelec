import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
}