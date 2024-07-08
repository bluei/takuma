import { NgModule, OnInit } from '@angular/core';
import { BrowserModule, provideClientHydration, withI18nSupport } from '@angular/platform-browser';

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
import { HomeAuthenticComponent } from './home/home-authentic/home-authentic.component';
import { HomeTechniqueComponent } from './home/home-technique/home-technique.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
// import AOS from 'aos';

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
    GetStartedComponent,
    HomeAuthenticComponent,
    HomeTechniqueComponent,
    HomeStartComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration() //important to get the lifecycle hooks to work!!!
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
