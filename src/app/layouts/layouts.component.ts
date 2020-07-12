import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  layout_list = [];

  constructor() { }


    ngOnInit(){
      let layout_local = localStorage.getItem("layouts");
      if(layout_local){
        let parsed = JSON.parse(layout_local);
        this.layout_list = parsed;
      } 
    }
    
  loadLayout(layoutname: string){
    let all_layouts = localStorage.getItem("layouts");
    if(all_layouts) { //if exists
      let parsed = JSON.parse(all_layouts);
      let sort_obj = parsed.find(el => el.name === layoutname);
      let el = document.getElementById(sort_obj.column);
      el.click();
        if(sort_obj.type === "desc"){ //needs a better logic, works for now
          el.click();       //double click on row is desc
        }

    }
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
    //update
    let layout_local = localStorage.getItem("layouts");
    if(layout_local){
      let parsed = JSON.parse(layout_local);
      this.layout_list = parsed;
    } 
  



 }
}
