import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeModule } from 'src/app/pages/home/home.module';
import { ContactModule } from 'src/app/pages/contact/contact.module';
import { CatalogueModule } from 'src/app/pages/catalogue/catalogue.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule,
    ContactModule,
    CatalogueModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
