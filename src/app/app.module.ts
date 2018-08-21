import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AudioComponent } from './components/audio/audio.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';
import { TimerComponent } from './components/timer/timer.component';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
