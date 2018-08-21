import { Component, OnInit } from '@angular/core';
import { IAudio } from '../../interfaces/audio.interface';
import { ITime } from '../../interfaces/time.interface';
import { AudioService } from '../../services/audio.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  isStarted: boolean = false
  isPaused: boolean = false

  innerHeight: any;
  innerWidth: any;

  constructor(
    private timerService: TimerService,
  ) {
    this.innerHeight = window.screen.height / 5
    this.innerWidth = window.screen.width
  }

  ngOnInit() {
    this.isStarted = false
    this.isPaused = false

    this.timerService.componentClassRef_Subject.next(this)
  }

  IsTimeUp() {
    this.timerService.isTimeUp_Subject.subscribe((isTimeUp: boolean) => {
      if (isTimeUp) {
        this.isStarted = false
      }
    })
  }

  start() {
    if (+this.Time.hours > 0 || +this.Time.minutes > 0 || +this.Time.seconds > 0) {
      this.isStarted = true
      this.timerService.setInitialTime({
        seconds: this.Time.seconds,
        minutes: this.Time.minutes,
        hours: this.Time.hours
      })

      this.timerService.startTimer()
    }
  }

  stop() {
    this.isStarted = false
    this.isPaused = false
    this.timerService.stopTimer()
  }

  pause() {
    this.isPaused = true
    this.timerService.pauseTimer()
  }

  continue() {
    this.isPaused = false
    this.timerService.startTimer()
  }

  // start: data getting from services
  get Time(): ITime {
    return this.timerService.TIME
  }
  // end: data getting from services

}
