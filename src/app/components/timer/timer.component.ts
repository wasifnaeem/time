import { Component, OnInit } from '@angular/core';
import { ITime } from '../../interfaces/time.interface';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  isStarted: boolean
  isPaused: boolean

  constructor(
    private timeService: TimeService
  ) { }

  ngOnInit() {
    this.isStarted = false
    this.isPaused = false
  }

  get Time(): ITime {
    return this.timeService.TIME
  }

  interval
  start() {
    if (this.Time.hours > 0 || this.Time.minutes > 0 || this.Time.seconds > 0) {
      this.isStarted = true
      this.timeService.setInitialTime({
        seconds: this.Time.seconds,
        minutes: this.Time.minutes,
        hours: this.Time.hours
      })
      this.timeService.start()
    }
  }

  stop() {
    this.isStarted = false
    this.isPaused = false
    this.timeService.stop()
  }

  reset() {
    this.isPaused = false
    this.isStarted = false
    this.timeService.reset()
  }

  pause() {
    this.isPaused = true
    this.timeService.pause()
  }

  continue() {
    this.isPaused = false
    this.timeService.start()
  }

}
