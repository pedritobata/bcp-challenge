import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Agency } from '../../models/agency.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency-item',
  templateUrl: './agency-item.component.html',
  styleUrls: ['./agency-item.component.scss']
})
export class AgencyItemComponent implements OnInit, OnChanges {

  @Input() agency: Agency = {
    agencia: '',
    departamento: '',
    direccion: '',
    distrito: '',
    lat: 0,
    lon: 0,
    provincia: ''
  };
  genericImage = 'https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BFIAXKWBVJFMZKF7QWVG5RRWEU.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges(){
   // console.log('this.agency',this.agency);
  }

  clickedHandler(agency: Agency){
    console.log("Clicked!!", agency);
    this.router.navigate(['agencies', agency.agencia], {queryParams: {title: 'Detalles de Agencia'}});
  }

}
