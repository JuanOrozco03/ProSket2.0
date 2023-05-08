import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LayoutModule } from '../layout/layout.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    LayoutModule,
    LayoutRoutingModule
  ]
})
export class NavigationModule { }
