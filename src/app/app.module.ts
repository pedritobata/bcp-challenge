import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgenciesModule } from './agencies/agencies.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SplashComponent } from './shared/components/splash/splash.component';
import { SharedModule } from './shared/shared.module';
import { AgencyApi } from './agencies/api/agency.api';

@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgenciesModule,
    SharedModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
