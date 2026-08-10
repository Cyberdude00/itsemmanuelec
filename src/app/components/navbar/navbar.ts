import { Component } from '@angular/core';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MobileMenu],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}