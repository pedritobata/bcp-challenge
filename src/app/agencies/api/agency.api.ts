import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Agency } from '../models/agency.model';
import { agenciesData } from '../../utils/data';
import { LOCAL_STORAGE_AGENCIES_DATA_KEY } from '../../shared/constants';

 
@Injectable()
export class AgencyApi {


  constructor(private http: HttpClient ) {}

  getAllAgencies(): Observable<Agency[]> {
    const agencies = localStorage.getItem(LOCAL_STORAGE_AGENCIES_DATA_KEY);
    return agencies ? of(JSON.parse(agencies)) : of(agenciesData);
  }

  updateAllAgencies(agencies: Agency[]){
    localStorage.setItem(LOCAL_STORAGE_AGENCIES_DATA_KEY, JSON.stringify(agencies));
  }

  // getAgencyByName(): Observable<Agency[]> {

  // }

}