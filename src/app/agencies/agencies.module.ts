import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgenciesListComponent } from './containers/agencies-list/agencies-list.component';
import { AgencyDetailComponent } from './containers/agency-detail/agency-detail.component';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesFacade } from './agencies.facade';
import { AgencyApi } from './api/agency.api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgencyItemComponent } from './components/agency-item/agency-item.component';
import { AgenciesState } from './state/agencies.state';

@NgModule({
  declarations: [
    AgenciesListComponent,
    AgencyDetailComponent,
    AgencyItemComponent,
  ],
  imports: [
    BrowserModule,
    AgenciesRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    AgencyApi,
    AgenciesFacade,
    AgenciesState
  ],
  bootstrap: [AgenciesListComponent]
})
export class AgenciesModule { }
