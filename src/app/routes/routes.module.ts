import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { AppComponent } from '../app.component';
import {  PageNotFoundComponent } from '../notfound.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'lol',  component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {

}