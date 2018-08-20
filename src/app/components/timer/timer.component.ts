import { Component, OnInit } from '@angular/core';
import { ITime } from '../../interfaces/time.interface';
import { TimeService } from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private isStarted: boolean
  private isPaused: boolean

  private innerHeight: any;
  private innerWidth: any;

  constructor(
    private timeService: TimeService,
  ) {
    this.innerHeight = window.screen.height / 6
    this.innerWidth = window.screen.width
  }

  ngOnInit() {
    this.isStarted = false
    this.isPaused = false
  }

  get Time(): ITime {
    return this.timeService.TIME
  }

  start() {
    if (+this.Time.hours > 0 || +this.Time.minutes > 0 || +this.Time.seconds > 0) {
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

  pause() {
    this.isPaused = true
    this.timeService.pause()
  }

  continue() {
    this.isPaused = false
    this.timeService.start()
  }
}
