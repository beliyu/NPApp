import { DataResolver } from './../app.resolver';
import { RwaComponent } from './rwa.component';
import {
    Input, Output, EventEmitter, ChangeDetectionStrategy,
    style, ViewEncapsulation
} from '@angular/core';
import { Component, trigger, state, animate, transition } from '@angular/core';

@Component({
    selector: 'table2-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
   
    <rwa #rwa></rwa><br/> 

  <p-dataTable [value]="data|pCateg: rwa.pb | pYear:rwa.rV0:rwa.rV1" [paginator]="true"
       [rows]="15" [pageLinks]="5" [rowsPerPageOptions]="[5,15,25]"  >
      <header>Laureates</header> 
      <p-column field="year" header="Year" [sortable]="true"
           [style]="{'width':'75px'}" ></p-column>
      <p-column field="cat" header="Category" [sortable]="true" >
          </p-column>
      <p-column field="fname" header="First Name" [sortable]="true"
           filterMatchMode="contains" [filter]="true" ></p-column>
      <p-column field="sname" header="SurName" [sortable]="true"
           filterMatchMode="contains" [filter]="true" ></p-column>

  </p-dataTable>
  `,
    styles: [`
        .bl{color: black;}
        .rd{color: red;}
    `]
})
export class Table2Component {
    @Input() public data;

}
