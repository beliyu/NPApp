import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { ToolbarModule, ButtonModule, DataTableModule,
         SharedModule, DialogModule, SliderModule } from 'primeng/primeng';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { HomeComponent } from './home';
import { Rwa, Table2Component } from './home';
import { LoginComponent } from './login/login.component';
import { WhmService } from './wh.service';
import { CatPipe, YearPipe } from './my.pipe';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState, WhmService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Table2Component,
    CatPipe, YearPipe, Rwa
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    HttpModule,
    ToolbarModule, ButtonModule, DataTableModule, DialogModule, SliderModule
  ],
  providers: [ // expose our Services and Providers into  Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

public  hmrOnInit(store: StoreType) {
    if (!store || !store.state) { return; }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

public  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

public  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
