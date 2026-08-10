import { Component } from '@angular/core';
import {
  Project,
  ProjectCard
} from '../project-card/project-card';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.scss'
})
export class ProjectGrid {
  projects: Project[] = [
    {
      title: 'PROJECT ONE',
      category: 'Commercial',
      image: 'assets/projects/project-01.jpg',
      url: '#'
    },
    {
      title: 'PROJECT TWO',
      category: 'Music Video',
      image: 'assets/projects/project-02.jpg',
      url: '#'
    },
    {
      title: 'PROJECT THREE',
      category: 'Film',
      image: 'assets/projects/project-03.jpg',
      url: '#'
    }
  ];
}