import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularExampleComponent } from './angular-example/angular-example.component';
import { HomeComponent } from './home/home.component';

import { GetStartedComponent } from './get-started/get-started.component';
import { LineageComponent } from './lineage/lineage.component';
import { TechniqueComponent } from './technique/technique.component';
import { Test1Component } from './test1/test1.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { HomeInstructorsComponent } from './home/home-instructors/home-instructors.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "angular-example", component:AngularExampleComponent},
  {path: "get-started", component:GetStartedComponent},
  {path: "lineage", component:LineageComponent},
  {path: "technique", component:TechniqueComponent},
  {path: "test1", component:Test1Component},
  {path: "ft", component:FirebaseTestComponent},
  {path: "instructors", component:HomeInstructorsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  ngOnInit() {
    
  }
}
