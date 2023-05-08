import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const sideNavigationPath = '';

export const navigationRoutes: Routes = [
  {
    path:'home',
    loadChildren: () =>
      import('../../../pages/home/home.module').then(
        (m) => m.HomeModule
      )
  },
  {
    path:'contact',
    loadChildren: () =>
      import('../../../pages/contact/contact.module').then(
        (m) => m.ContactModule
      )
  },
  {
    path:'catalogue',
    loadChildren: () =>
      import('../../../pages/catalogue/catalogue.module').then(
        (m) => m.CatalogueModule
      )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@Injectable({ providedIn: 'root' })
export class NavigationRoutingService {
  constructor() {}
}
