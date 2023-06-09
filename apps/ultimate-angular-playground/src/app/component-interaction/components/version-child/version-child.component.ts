import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'ultimate-angular-playground-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss'],
})
export class VersionChildComponent implements OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];

    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} was changed ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
