import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class Filters {

  active = 'all';

  @Output()
  categoryChange = new EventEmitter<string>();

  filter(category: string): void {

    this.active = category;

    this.categoryChange.emit(category);
  }
}