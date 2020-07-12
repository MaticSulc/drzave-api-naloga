import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

const API_URL = "https://api.worldbank.org/v2/country/?format=json";
const API_DETAILS_URL = "http://api.worldbank.org/v2/country/"

@Injectable()
export class CountryDataService {

  constructor(private http: HttpClient) {
}

  getCountryList(): Observable<Country[]>{
    return this.http.get<Country[]>(API_URL);
  }

  getCountryDetails(id): Observable<Country[]>{
    return this.http.get<Country[]>(API_URL+id+"?format=json");
  }

}
