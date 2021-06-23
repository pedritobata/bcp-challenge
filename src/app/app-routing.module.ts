import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesRoutingModule } from './agencies/agencies-routing.module';

const routes: Routes = [{
  path: '',
  component: AgenciesRoutingModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
