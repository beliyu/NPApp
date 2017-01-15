import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WhmService } from '../wh.service';

import { Observable } from 'rxjs/Observable';
import '../../assets/css/styles.css';

import { AppState } from '../app.service';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styles: [`
main {
  padding: 1em;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
}
h2 {
  margin-bottom: 30px;
}
`],
  template: `
<main>
  <div class="col-md-2"> 
    <img src="//upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nobel_Prize.png/220px-Nobel_Prize.png"
       width="150" height="150">
  </div>
  <div class="col-md-10">
    <h2> Nobel Prices list </h2>
    <table2-component  [data]="WM" >
    </table2-component>
  </div>  
</main>`
})
export class HomeComponent implements OnInit {
  public WM = [];
  constructor(private _whm: WhmService) { }

  public ngOnInit() {
    this.whmGetAll();
  }

  private whmGetAll() {
    this._whm.getAll().subscribe((data) => {
      console.log(data[0]);
      let tDat = [];
      for (let n of data) {
        for (let m of n.laureates) {
          tDat.push({
            year: n.year, cat: n.category,
            fname: m.firstname, sname: m.surname
          });
        }
      }
      this.WM = tDat;
    }, (err) => console.log(err));
  }

}
