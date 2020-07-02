import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../services/country-data.service'
import { MatTableDataSource  } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

let countries = [];

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'capital', 'region', 'income', 'details'];
  dataSource = [];

  
  constructor(private countrydataservice: CountryDataService, private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(){    
    this.countrydataservice.getCountryList()
    .subscribe(data => {
      for(let i=0;i<50;i++){
        countries.push(data[1][i]);
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
  
  
}