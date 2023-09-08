import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStylesRoutingModule } from './component-styles-routing.module';
import { ComponentStylesViewComponent } from './components/component-styles-view/component-styles-view.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentStylesBestPracitcesComponent } from './components/component-styles-best-pracitces/component-styles-best-pracitces.component';
import { MatCardModule } from '@angular/material/card';
import { SpecialSelectorsComponent } from './components/special-selectors/special-selectors.component';
import { LoadingStylesComponent } from './components/loading-styles/loading-styles.component';

@NgModule({
  declarations: [
    ComponentStylesViewComponent,
    ComponentStylesBestPracitcesComponent,
    SpecialSelectorsComponent,
    LoadingStylesComponent,
  ],
  imports: [
    CommonModule,
    ComponentStylesRoutingModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class ComponentStylesModule {}
