import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularExampleComponent } from './angular-example/angular-example.component';
import { HomeComponent } from './home/home.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LineageComponent } from './lineage/lineage.component';
import { TechniqueComponent } from './technique/technique.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "angular-example", component:AngularExampleComponent},
  {path: "get-started", component:GetStartedComponent},
  {path: "lineage", component:LineageComponent},
  {path: "technique", component:TechniqueComponent},
  {path: "instructors", component:InstructorsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  ngOnInit() {
    
  }
}
