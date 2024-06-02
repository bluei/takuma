import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularExampleComponent } from './angular-example/angular-example.component';
import { HomeComponent } from './home/home.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { Test1Component } from './test1/test1.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { NavComponent } from './nav/nav.component';
import { TechniqueComponent } from './technique/technique.component';
import { LineageComponent } from './lineage/lineage.component';
import { GetStartedComponent } from './get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularExampleComponent,
    HomeComponent,
    InstructorsComponent,
    Test1Component,
    HomeHeaderComponent,
    NavComponent,
    TechniqueComponent,
    LineageComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
