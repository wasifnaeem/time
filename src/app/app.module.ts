import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AudioComponent } from './components/audio/audio.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';
import { TimerComponent } from './components/timer-components/timer/timer.component';
import { MaterialModule } from './modules/material/material.module';
import { RoutesModule } from './modules/routes/routes.module';
import { TwoDigitsPipe } from './pipes/two-digits.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    StopWatchComponent,
    TwoDigitsPipe,
    AudioComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
