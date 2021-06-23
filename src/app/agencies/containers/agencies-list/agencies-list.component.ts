import { Component, OnInit } from '@angular/core';
import { AgenciesFacade } from '../../agencies.facade';
import { Agency } from '../../models/agency.model';
import { AgenciesState } from '../../state/agencies.state';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  agencies: Agency[] = [];

  constructor(private agenciesFacade: AgenciesFacade, private agencyState: AgenciesState) { }

  ngOnInit(): void {
    this.agenciesFacade.getAgencies().subscribe(agencies => {
      this.agencies = agencies;
      this.agencyState.setAgencies(agencies);
    })
  }

}
