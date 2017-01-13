import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rwa',
    template: `
    <div class="row">
        <div class="col-xs-4" >
        <span>Category: </span>
        <select [(ngModel)]="pb">
            <option *ngFor="let b of categ" [value]="b.b">{{b.a}}</option>
        </select>
        </div>
        <div class="col-xs-8">
        <span>Year:  {{rangeVal[0]}} - {{rangeVal[1]}}</span>
        <p-slider [(ngModel)]="rangeVal" [range]="true" 
            [style]="{'width':'200px'}"  [min]="1901" [max]="2016"
            (onChange)="slChn($event)"> 
        </p-slider> 
        <div>
    </div>`,
    styles: [
        `select {padding: 3px;}
        span {font-weight: 600;}`
    ]
})
export class Rwa {
    public pb: string = '';
    public pu: string = '';
    public rangeVal: number[] = [1975, 2005];
    public rV0: number = 1975;
    public rV1: number = 2005;
    private categ = [
        {a: 'All', b: ''},
        {a: 'Chemistry', b: 'chemistry'},
        {a: 'Economics', b: 'economics'},
        {a: 'Literature', b: 'literature'},
        {a: 'Medicine', b: 'medicine'},
        {a: 'Peace', b: 'peace'},
        {a: 'Physics', b: 'physics'}];
    public slChn (a) {
        this.rV0 = +this.rangeVal[0];
        this.rV1 = +this.rangeVal[1];
    };
}
