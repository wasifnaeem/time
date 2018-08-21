import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';
import { TimerComponent } from './components/timer/timer.component';
import { MaterialModule } from './modules/material/material.module';
import { RoutesModule } from './modules/routes/routes.module';
import { TwoDigitsPipe } from './pipes/two-digits.pipe';
import { AudioComponent } from './components/audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    StopWatchComponent,
    TwoDigitsPipe,
    AudioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }