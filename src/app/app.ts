import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Movies } from './components/movies/movies';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Movies,
    // Footer,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cineHistory');
}
