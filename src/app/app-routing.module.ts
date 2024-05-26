import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularExampleComponent } from './angular-example/angular-example.component';
import { HomeComponent } from './home/home.component';
import { InstructorsComponent } from './instructors/instructors.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "angular-example", component:AngularExampleComponent},
  {path: "experience", component:InstructorsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
