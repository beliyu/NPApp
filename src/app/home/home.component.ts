import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WhmService } from '../wh.service';

import { Observable } from 'rxjs/Observable';
import '../../assets/css/styles.css';

import { AppState } from '../app.service';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
   private WM= [] ;
   private ime$: Observable<any>;

  constructor(private _whm: WhmService) {  }

  public ngOnInit() {
  this.whmGetAll();
  }

private whmGetAll() {
    this._whm.getAll().subscribe((data) => {
      console.log(data);
      let tDat = [];
      for (let n of data) {
        for (let m of n.laureates) {
        tDat.push({year: n.year, cat: n.category,
          fname: m.firstname, sname: m.surname});
        }
      }
      this.WM = tDat;
    }, (err) => console.log(err));
  }

}
