import { Component } from '@angular/core';
import { MissionService } from "../../services/mission.service";

@Component({
  selector: 'ultimate-angular-playground-missioncontrol',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.scss'],
  providers: [MissionService]
})
export class MissioncontrolComponent {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => this.history.push(`${astronaut} confirmed the mission`)
    );
  }

  announce(): void {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
