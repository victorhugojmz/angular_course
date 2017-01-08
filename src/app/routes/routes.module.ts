import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { AppComponent } from '../app.component';
import {  PageNotFoundComponent } from '../notfound.component';
import { HomeComponent } from '../home/home.component';
import { DirectivasComponent } from '../directivas/directivas.component';
import { TypescriptComponent } from '../typescript/typescript.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ComponentsComponent } from '../components/components.component';
import { ServiciosComponent } from '../servicios/servicios.component';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'directivas',  component: DirectivasComponent},
  { path: 'componentes',  component: ComponentsComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**',  component: PageNotFoundComponent }
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