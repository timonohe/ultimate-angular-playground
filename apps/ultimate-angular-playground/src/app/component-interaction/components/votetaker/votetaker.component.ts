import { Component } from '@angular/core';

@Component({
  selector: 'ultimate-angular-playground-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss'],
})
export class VotetakerComponent {

  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

}
