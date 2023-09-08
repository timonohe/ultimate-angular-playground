import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentStylesViewComponent } from './components/component-styles-view/component-styles-view.component';
import { ComponentStylesBestPracitcesComponent } from './components/component-styles-best-pracitces/component-styles-best-pracitces.component';
import { SpecialSelectorsComponent } from "./components/special-selectors/special-selectors.component";
import {LoadingStylesComponent} from "./components/loading-styles/loading-styles.component";

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
      {
        path: 'loading-styles',
        component: LoadingStylesComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentStylesRoutingModule { }
