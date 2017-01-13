import {
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  RequestMethod,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import {
  WhmService,
} from './wh.service';

describe('whService', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        // tslint:disable-next-line:object-literal-shorthand
        useFactory: (backend: ConnectionBackend, defOpt: BaseRequestOptions) => {
          return new Http(backend, defOpt);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      WhmService
    ]
  }));

  it('getAll()',
    inject([WhmService, MockBackend], fakeAsync((whmService, mockBackend ) => {
      let res;
      mockBackend.connections.subscribe((c) => {
        expect(c.request.url).toBe('http://api.nobelprize.org/v1/prize.json');
        expect(c.request.method).toBe(RequestMethod.Get);
        let response = new ResponseOptions({
          body: '{"prizes": [{"year":"2016", "laureates":[{"surname":"Tu"}] }]}'});
        c.mockRespond(new Response(response));
      });
      whmService.getAll().subscribe((_res) => {
        res = _res;
      });
      tick();
      expect(res[0].year).toBe('2016');
      expect(res[0].laureates[0].surname).toBe('Tu');
   }))
 );

});
