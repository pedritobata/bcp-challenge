import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgencyApi } from './agencies/api/agency.api';
import { AgenciesState } from './agencies/state/agencies.state';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges{
  isShowSplash = true;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private agencyAPi: AgencyApi,
    private agencyState: AgenciesState ){

  }

  ngOnInit(){
    setTimeout(() => {
      this.router.navigateByUrl('/agencies?title=Agencias');
      this.isShowSplash = false;
    }, 2000);
  }

  ngOnDestroy() {

  }

  ngOnChanges(){
    console.log('changes!!!')
  }

}
