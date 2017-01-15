import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  inject,
  async,
  fakeAsync,
  tick,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import {
  Http
} from '@angular/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';
import { WhmService } from './../wh.service';

describe(`Home Component`, () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // async beforeEach
  beforeEach(async(() => {

  // stub UserService for test purposes
    let whmServiceStub = {
      user: { name: 'Test User'}
    };
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
       providers:    [WhmService, Http ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    let _whm = fixture.debugElement.injector.get(WhmService);
    let spy = spyOn(_whm, 'getAll')
          .and.returnValue(
              Observable.of(new Object())
              .map(() => JSON.stringify([
                {year: '2016', laureates: [{ surname: 'Tu'}]
               }])));
    fixture.detectChanges(); // trigger initial data binding
  });


  xit('should init component with laureates',  fakeAsync(() => {
    tick();
    fixture.detectChanges();
    expect(comp.WM).toEqual('');
  }));


});
