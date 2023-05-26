import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { CountdownTimerComponent } from "../countdown-timer/countdown-timer.component";

@Component({
  selector: 'ultimate-angular-playground-countdown-parent-viewchild',
  templateUrl: './countdown-parent-viewchild.component.html',
  styleUrls: ['./countdown-parent-viewchild.component.scss'],
})
export class CountdownParentViewchildComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
