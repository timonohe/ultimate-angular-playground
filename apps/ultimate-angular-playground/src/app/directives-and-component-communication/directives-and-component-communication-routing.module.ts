import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DirectivesAndComponentCommunicationViewComponent
} from "./components/directives-and-component-communication-view/directives-and-component-communication-view.component";


const routes: Routes = [
  {
    path: '',
    component: DirectivesAndComponentCommunicationViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesAndComponentCommunicationRoutingModule { }
