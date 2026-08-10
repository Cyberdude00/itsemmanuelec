import { Component } from '@angular/core';
import { Filters } from '../../components/filters/filters';
import { ProjectGrid } from '../../components/project-grid/project-grid';
import { Biography } from '../../components/biography/biography';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Filters, ProjectGrid, Biography],
  templateUrl: './home.html'
})
export class Home {}