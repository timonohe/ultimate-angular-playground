import { Component, Input } from "@angular/core";
import { Hero } from "../../../models/hero";

@Component({
  selector: 'ultimate-angular-playground-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
}
