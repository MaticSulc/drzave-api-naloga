import { Component, OnInit, Input} from '@angular/core';
import { CountryListComponent } from '../country-list/country-list.component';


@Component({
  selector: 'layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  @Input() sorting: {};
 

  constructor() { }

  ngOnInit() {
   console.log(this.sorting);
  }

}
