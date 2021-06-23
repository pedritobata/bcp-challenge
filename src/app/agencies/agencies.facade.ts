import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agency } from './models/agency.model';
import { AgencyApi } from './api/agency.api';
import { AgenciesState } from './state/agencies.state';

@Injectable()
export class AgenciesFacade {


  constructor(private agenciesApi: AgencyApi, private agencyState: AgenciesState) {
  }

  getAgencies(): Observable<Agency[]>  {
    return this.agenciesApi.getAllAgencies();
  }

  getAgencyByName(name: string):  Observable<Agency>{
    return this.agencyState.getAgencyByName(name);
  }

}