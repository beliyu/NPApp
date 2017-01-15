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
        <login (userChange)="userCh($event)"> Login </login>
    </div>
  </p-toolbar> 

    <main>
      <home *ngIf="user"></home>
    </main>

    <footer>
      <span> First Beat Media - Test App </span>
    </footer>  `
})
export class AppComponent {
  public name = 'Angular 2 Webpack Starter';
  public user: string = '';
  private angularclassLogo = 'assets/img/angularclass-avatar.png';
  constructor(
    public appState: AppState) {
  }
  public userCh(e) {
    this.user = e.user;
  };
}
