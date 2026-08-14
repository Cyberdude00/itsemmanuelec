import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss'
})
export class MobileMenu {

  @Input() open = false;

  @Output() closed = new EventEmitter<void>();

}