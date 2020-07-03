import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

const API_URL = "https://api.worldbank.org/v2/country/?format=json";

@Injectable()
export class CountryDataService {

  constructor(private http: HttpClient) {
}

  getCountryList(): Observable<Country[]>{
    return this.http.get<Country[]>(API_URL);
  }

}
