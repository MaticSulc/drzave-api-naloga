import { Component, OnInit, Input} from '@angular/core';
import { CountryListComponent } from '../country-list/country-list.component';


@Component({
  selector: 'layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  layout_list;

  constructor() { }

  ngOnInit() {
    let layouts = localStorage.getItem("layouts");
    if(layouts) JSON.parse(layouts);
    this.layout_list = layouts;
    

  }
  saveLayout(){
    let currentSort = JSON.parse(localStorage.getItem("sorting"));
    var inputElement = <HTMLInputElement>document.getElementById('layoutName');
    let layouts = [];
    let temp = localStorage.getItem("layouts");
    if(temp) {
      let arr = JSON.parse(temp);
      arr.forEach(element => {
        layouts.push(element);
      });
    }
    let newobj = {
      name: inputElement.value,
      column: currentSort.column,
      type: currentSort.type
    }
    layouts.push(newobj);
    localStorage.setItem("layouts", JSON.stringify(layouts));
  }


 }
