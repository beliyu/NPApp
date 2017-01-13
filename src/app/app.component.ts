/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
  <p-toolbar >
    <div class="ui-toolbar-group-left">
      <a> beliYu </a>        
    </div>
    
    <div class="ui-toolbar-group-right">
        <login #login> Login </login>
    </div>
  </p-toolbar> 

    <main>
      <home *ngIf="login.user"></home>
    </main>

    <footer>
      <span> First Beat Media - Test App </span>
    </footer>  `
})
export class AppComponent {
  public name = 'Angular 2 Webpack Starter';
  private angularclassLogo = 'assets/img/angularclass-avatar.png';
  private auth: boolean = false;
  constructor(
    public appState: AppState) {
  }

}
