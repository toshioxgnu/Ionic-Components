import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.page.html',
  styleUrls: ['./dark-mode.page.scss'],
})
export class DarkModePage implements OnInit {

  darkMode = true;

  constructor() {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {
  }

  cambio() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');

  }

}
