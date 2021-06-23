import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesListComponent } from './containers/agencies-list/agencies-list.component';
import { AgencyDetailComponent } from './containers/agency-detail/agency-detail.component';

const routes: Routes = [
  {
    path: 'agencies',
    component: AgenciesListComponent,
  },
  {
    path: 'agencies/:agencyId',
    component: AgencyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
