import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import {  PageNotFoundComponent } from './notfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentsComponent } from './components/components.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { MaterialModule } from '@angular/material';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent,
    DirectivasComponent,
    TypescriptComponent,
    PipesComponent,
    ComponentsComponent,
    ServiciosComponent,
    ClienteFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
