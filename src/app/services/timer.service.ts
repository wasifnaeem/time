import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITime } from '../interfaces/time.interface';
import { AudioService } from './audio.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  componentClassRef_Subject: Subject<any> = new Subject()
  isTimeUp_Subject: Subject<boolean> = new Subject()
  private time: ITime
  private initialTime: ITime
  private interval: any

  constructor(
    private audioService: AudioService,
  ) {
    this.time = {
      seconds: '03',
      minutes: '00',
      hours: '00'
    }
  }

  setInitialTime(time: ITime) {
    this.initialTime = time
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (+this.time.hours == 0 && +this.time.minutes == 0 && +this.time.seconds == 0) {
        this.isTimeUp_Subject.next(true)
        clearInterval(this.interval)
      }
      else if (+this.time.hours > 0 && +this.time.minutes == 0 && +this.time.seconds == 0) {
        this.time.hours = (+this.time.hours - 1).toString()
        this.time.hours = +this.time.hours < 10 ? '0' + this.time.hours : this.time.hours
        this.time.minutes = '59'
        this.time.seconds = '59'
      }
      else if (+this.time.minutes > 0 && +this.time.seconds == 0) {
        this.time.minutes = (+this.time.minutes - 1).toString()
        this.time.minutes = +this.time.minutes < 10 ? '0' + this.time.minutes : this.time.minutes
        this.time.seconds = '59'
      }
      else {
        this.time.seconds = (+this.time.seconds - 1).toString()
        this.time.seconds = +this.time.seconds < 10 ? '0' + this.time.seconds : this.time.seconds
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.interval)
    this.time.seconds = '03'
    this.time.minutes = '00'
    this.time.hours = '00'
  }

  resetTimer() {
    if (this.initialTime == undefined)
      return

    this.time = this.initialTime
    clearInterval(this.interval)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  continueTimer() {
    this.startTimer()
  }

  // Use this property to show every tick-change
  get TIME(): ITime {
    return this.time
  }

}
