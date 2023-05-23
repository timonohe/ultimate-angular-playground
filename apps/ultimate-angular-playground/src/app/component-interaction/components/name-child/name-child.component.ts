import { Component, Input } from "@angular/core";

@Component({
  selector: 'ultimate-angular-playground-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss'],
})
export class NameChildComponent {

  @Input()
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  private _name = '';

}
