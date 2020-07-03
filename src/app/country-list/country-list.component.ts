import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryDataService } from '../services/country-data.service'
import { MatTableDataSource  } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSort } from '@angular/material/sort';

let countries = new MatTableDataSource<any>();

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CountryListComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'capitalCity', 'region', 'income', 'details'];
  dataSource = new MatTableDataSource<any>();
  expandedElement: any | null;
  param: string;

  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private countrydataservice: CountryDataService, private route: ActivatedRoute, private router: Router) {  };

  ngOnInit(){ 
    setTimeout(() => {
      let param = this.checkParams();
      if(param){
      let el = document.getElementById(param);
      el.scrollIntoView({behavior: "smooth", block: "start"});
      el.click();
      }


    }, 1000);  //wait 1s for page to load
    
 

    this.dataSource.sort = this.sort;
    this.countrydataservice.getCountryList()
    .subscribe(data => {
      for(let i=0;i<50;i++){
        countries.data.push(data[1][i]);
        this.dataSource = countries;
      }
    });
    
  }  
  addParams(id:string){
    this.router.navigate(['./'],
       { 
        relativeTo: this.route, 
        queryParams: {id: id},
      })
  }

  sortData(event){
    this.dataSource.sort = this.sort;
    console.log(this.sort);
  }
  checkParams(){
    let val;
    this.route.queryParams.subscribe(params => {
      val = params['id'];
      
  });
  return val;
  }
}