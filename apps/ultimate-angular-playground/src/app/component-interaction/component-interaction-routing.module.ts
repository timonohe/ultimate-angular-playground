import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInteractionViewComponent } from './components/component-interaction-view/component-interaction-view.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentInteractionViewComponent,
    children: [
      {
        path: 'pass-data-from-parent-to-child',
        component: HeroParentComponent,
      },
      {
        path: 'intercept-property-changes-with-setter',
        component: NameParentComponent,
      },
      {
        path: 'intercept-property-changes-with-ng-on-changes',
        component: VersionParentComponent,
      },
      { path: 'output-event', component: VotetakerComponent },
      {
        path: 'reference-by-local-variable',
        component: CountdownParentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule { }
