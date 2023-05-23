import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: 'ultimate-angular-playground-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;

  ngOnDestroy(): void {
    this.clearTimer?.();
  }

  start(): void {
    this.countDown();
  }
  stop(): void {
    this.clearTimer?.();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer: VoidFunction | undefined;

  private countDown(): void {
    this.clearTimer?.();
    const interval = setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
    this.clearTimer = () => clearInterval(interval);
  }
}
