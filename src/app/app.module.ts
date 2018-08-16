import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    StopWatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
