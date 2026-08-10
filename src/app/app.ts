import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { TopNavbar } from './components/top-navbar/top-navbar';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopNavbar, Navbar, Home, Footer],
  templateUrl: './app.html'
})
export class App {}