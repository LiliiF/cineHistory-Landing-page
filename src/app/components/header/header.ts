import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; // faz o menu “pular” para cada seção

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuOpen = false;
  activeSection: string = 'hero';

  constructor(private viewportScroller: ViewportScroller) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
    this.activeSection = section; // marca a seção ativa
  }
}
