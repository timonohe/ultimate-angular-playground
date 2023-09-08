import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DirectivesAndComponentCommunicationViewComponent
} from './components/directives-and-component-communication-view/directives-and-component-communication-view.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {
  DirectivesAndComponentCommunicationRoutingModule
} from "./directives-and-component-communication-routing.module";

@NgModule({
  declarations: [DirectivesAndComponentCommunicationViewComponent],
  imports: [CommonModule, MatIconModule, RouterOutlet, DirectivesAndComponentCommunicationRoutingModule],
})
export class DirectivesAndComponentCommunicationModule {}
