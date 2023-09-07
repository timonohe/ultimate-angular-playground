import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentStylesViewComponent } from './components/component-styles-view/component-styles-view.component';
import { ComponentStylesBestPracitcesComponent } from './components/component-styles-best-pracitces/component-styles-best-pracitces.component';
import { SpecialSelectorsComponent } from "./components/special-selectors/special-selectors.component";

const routes: Routes = [
  {
    path: '',
    component: ComponentStylesViewComponent,
    children: [
      {
        path: 'best-practices',
        component: ComponentStylesBestPracitcesComponent,
      },
      {
        path: 'special-selectors',
        component: SpecialSelectorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentStylesRoutingModule { }
