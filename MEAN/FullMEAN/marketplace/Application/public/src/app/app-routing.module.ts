import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BikesComponent } from './bikes/bikes.component'
import { BikesListComponent } from './bikes/bikes-list/bikes-list.component';
import { BikesUserComponent } from './bikes/bikes-user/bikes-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '/bikes/list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bikes', component: BikesComponent, children: [
    { path: 'list' as 'dashboard', component: BikesListComponent },
    { path: 'myBike', component: BikesUserComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
