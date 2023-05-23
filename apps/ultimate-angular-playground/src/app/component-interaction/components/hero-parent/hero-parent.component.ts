import { Component } from "@angular/core";
import { HEROES } from "../../../models/hero";

@Component({
  selector: 'ultimate-angular-playground-hero-parent',
  template: `
    <p>
      To pass data from a parent component to a child component, the parent component
      could pass some data to the input attributes from the child component.
    </p>
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <ultimate-angular-playground-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master" />
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
