import { Injectable } from '@angular/core';
import { ITime } from '../interfaces/time.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private time: ITime
  private initialTime: ITime
  private interval: any

  constructor() {
    this.time = {
      seconds: '10',
      minutes: '01',
      hours: '01'
    }
  }

  setInitialTime(time: ITime) {
    this.initialTime = time
  }

  start() {
    this.interval = setInterval(() => {
      if (+this.time.hours == 0 && +this.time.minutes == 0 && +this.time.seconds == 0) {
        clearInterval(this.interval)
        return
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

  stop() {
    clearInterval(this.interval)
    this.time.seconds = '10'
    this.time.minutes = '01'
    this.time.hours = '00'
  }

  reset() {
    if (this.initialTime == undefined)
      return

    this.time = this.initialTime
    clearInterval(this.interval)
  }

  pause() {
    clearInterval(this.interval);
  }

  continue() {
    this.start()
  }

  // Use this property to show every tick-change
  get TIME(): ITime {
    return this.time
  }

}
