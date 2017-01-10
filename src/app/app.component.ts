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
      <a> beliPro </a>        
    </div>
    
    <div class="ui-toolbar-group-right">
        <button pButton type="button" (click)="login()"
          *ngIf="!auth" icon="fa-sign-in"></button>
        <button pButton type="button" (click)="logout()"
          *ngIf="auth" icon="fa-sign-out"></button>
    </div>
  </p-toolbar> 

    <main>
      <home></home>
    </main>

    <footer>
      <span>WebPack Angular 2 Starter </span>
    </footer>  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  auth:boolean = false;
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
  }

}
