import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Agency } from '../models/agency.model';

@Injectable()
export class AgenciesState {

  private updating$ = new BehaviorSubject<boolean>(false);
  private agencies$ = new BehaviorSubject<Agency[]>([]);

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getAgencies$() {
    return this.agencies$.asObservable();
  }

  getAgencyByName(name: string){
    const agencies = this.agencies$.getValue();
    const agency = agencies.find(agency => agency.agencia === name)!!;
    console.log("FACADE:", agency);
    console.log("FACADE:agencies", agencies);
    return of(agency);
  }

  setAgencies(agencies: Agency[]) {
    this.agencies$.next(agencies);
  }

  updateAgency(updatedAgency: Agency) {
    const agencies = this.agencies$.getValue();
    const indexOfUpdated = agencies.findIndex(agency => agency.agencia === updatedAgency.agencia);
    agencies[indexOfUpdated] = updatedAgency;
    this.agencies$.next([...agencies]);
  }

}