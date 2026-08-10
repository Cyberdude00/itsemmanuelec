import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class Filters {
  active = 'all';

  filter(category: string): void {
    this.active = category;
  }
}