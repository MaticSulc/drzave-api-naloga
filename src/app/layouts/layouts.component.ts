import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit {
  layoutList = [];

  constructor() {}

  ngOnInit(): void {
    const localLayout = localStorage.getItem('layouts');
    if (localLayout) {
      const parsed = JSON.parse(localLayout);
      this.layoutList = parsed;
    }
  }

  loadLayout(layoutname: string): void {
    const allLayouts = localStorage.getItem('layouts');
    if (allLayouts) {
      // if exists
      const parsed = JSON.parse(allLayouts);
      const sortObj = parsed.find((e) => e.name === layoutname);
      const el = document.getElementById(sortObj.column);
      el.click();
      if (sortObj.type === 'desc') {
        el.click(); // double click on row is desc
      }
    }
  }

  saveLayout(): void {
    const currentSort = JSON.parse(localStorage.getItem('sorting'));
    const inputElement = document.getElementById('layoutName') as HTMLInputElement;
    const layouts = [];
    const temp = localStorage.getItem('layouts');
    if (temp) {
      const arr = JSON.parse(temp);
      arr.forEach((element) => {
        layouts.push(element);
      });
    }
    const newobj = {
      name: inputElement.value,
      column: currentSort.column,
      type: currentSort.type,
    };
    layouts.push(newobj);
    localStorage.setItem('layouts', JSON.stringify(layouts));
    // update
    const currentLayouts = localStorage.getItem('layouts');
    if (currentLayouts) {
      const parsed = JSON.parse(currentLayouts);
      this.layoutList = parsed;
    }
  }
}
