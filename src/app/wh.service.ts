import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()

export class WhmService {
    private headers: Headers;
    private _url= 'http://api.nobelprize.org/v1/prize.json';
    constructor(private _http: Http) {
        this.headers = new Headers({'Content-Type': 'application/json'});
    };
public getAll() {
    return this._http.get(this._url)
        .map((res: Response) => res.json())
        .map((data) => data.prizes);
    };
}
