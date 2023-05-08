import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { navigationRoutes, sideNavigationPath } from './core/components/navigation/navigation-routing.module';

const routes: Routes = [
  {
    path:sideNavigationPath,
    component:NavigationComponent,
    children: navigationRoutes
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
