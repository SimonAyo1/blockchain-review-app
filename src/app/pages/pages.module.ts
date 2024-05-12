import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PagesComponent } from './pages.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PagesComponent,
    CompaniesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
