import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { ComponentInteractionViewComponent } from './components/component-interaction-view/component-interaction-view.component';
import { MatIconModule } from '@angular/material/icon';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { MatButtonModule } from '@angular/material/button';
import { VoterComponent } from './components/voter/voter.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';
import { CountdownParentViewchildComponent } from './components/countdown-parent-viewchild/countdown-parent-viewchild.component';
import { MissioncontrolComponent } from './components/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';

@NgModule({
  declarations: [
    ComponentInteractionViewComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParentViewchildComponent,
    MissioncontrolComponent,
    AstronautComponent,
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class ComponentInteractionModule {}
