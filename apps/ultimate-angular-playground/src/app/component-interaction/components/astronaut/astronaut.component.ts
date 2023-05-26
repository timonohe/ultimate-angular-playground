import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MissionService } from "../../services/mission.service";

@Component({
  selector: 'ultimate-angular-playground-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss'],
})
export class AstronautComponent implements OnDestroy {
  @Input()
  astronaut = '';

  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm(): void {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
