import { Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
import { TimerService } from './services/timer.service';
import { TimerComponent } from './components/timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timerComponent: TimerComponent
  constructor(
    private timerService: TimerService
  ) {
    this.subjectEventCaller()
  }

  subjectEventCaller() {
    this.timerService.componentClassRef_Subject.subscribe((component: TimerComponent) => {
      this.timerComponent = component
    })
  }

  isFullScreen: boolean = true
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.key === 'f') {
      if (screenfull.enabled) {
        if (this.isFullScreen) {
          screenfull.request();
          this.isFullScreen = true
        }

        if (!this.isFullScreen) {
          screenfull.exit();
          this.isFullScreen = false
        }

        this.isFullScreen = !this.isFullScreen
      }
    }
    else if (event.key === ' ') {
      if (!this.timerComponent.isStarted)
        this.timerComponent.start()
      else if (this.timerComponent.isPaused) {
        this.timerComponent.continue()
      }
      else if (!this.timerComponent.isPaused) {
        this.timerComponent.pause()
      }
    }
    else if (event.key === 's') {
      this.timerComponent.stop()
    }
  }
}
