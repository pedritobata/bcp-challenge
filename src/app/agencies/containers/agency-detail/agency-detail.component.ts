import { Component, OnInit } from '@angular/core';
import { Agency } from '../../models/agency.model';
import { AgenciesFacade } from '../../agencies.facade';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {

  agency: Agency = {
    agencia: '',
    departamento: '',
    direccion: '',
    distrito: '',
    lat: 0,
    lon: 0,
    provincia: ''
  }

  constructor(private agenciesFacade: AgenciesFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.agenciesFacade.getAgencyByName(params.agencyId).subscribe(agency => {
        console.log('agencia:', this.agenciesFacade.getAgencyByName(params.agencyId));
        this.agency = agency;
      })
    });
  }

}
