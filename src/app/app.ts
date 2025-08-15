import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    // About,
    Header,
    Hero,
    // Footer,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cineHistory');
}
