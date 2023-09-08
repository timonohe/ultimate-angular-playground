import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {LifecycleExampleComponent} from './lifecycle-example/lifecycle-example.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';
import {ViewEncapsulationComponent} from './view-encapsulation/view-encapsulation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';

const routes: Routes = [
  { path: 'angular-lifecycle', component: LifecycleExampleComponent },
  { path: 'view-encapsulation', component: ViewEncapsulationComponent },
  {
    path: 'component-interaction',
    loadChildren: () => import('./component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule)
  },
  {
    path: 'component-styles',
    loadChildren: () => import('./component-styles/component-styles.module').then(m => m.ComponentStylesModule)
  },
  {
    path: 'directives-and-components-communication',
    loadChildren: () => import('./directives-and-component-communication/directives-and-component-communication.module').then(m => m.DirectivesAndComponentCommunicationModule)
  },
  { path: '', redirectTo: 'angular-lifecycle', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LifecycleExampleComponent,
    ViewEncapsulationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
