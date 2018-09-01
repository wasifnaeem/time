import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITime } from '../interfaces/time.interface';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  componentClassRef_Subject: Subject<any> = new Subject()
  isTimeUp_Subject: Subject<boolean> = new Subject()

  private seconds: string
  private minutes: string
  private hours: string

  private initialTime: ITime

  constructor() {
    this.seconds = '03'
    this.minutes = '00'
    this.hours = '00'
  }

  setInitialTime(time: ITime) {
    this.initialTime = time
  }

  private interval: any
  start() {
    this.interval = setInterval(() => {
      if (+this.hours == 0 && +this.minutes == 0 && +this.seconds == 0) {
        this.isTimeUp_Subject.next(true)
        clearInterval(this.interval)
      }
      else if (+this.hours > 0 && +this.minutes == 0 && +this.seconds == 0) {
        this.hours = (+this.hours - 1).toString()
        this.hours = +this.hours < 10 ? '0' + this.hours : this.hours
        this.minutes = '59'
        this.seconds = '59'
      }
      else if (+this.minutes > 0 && +this.seconds == 0) {
        this.minutes = (+this.minutes - 1).toString()
        this.minutes = +this.minutes < 10 ? '0' + this.minutes : this.minutes
        this.seconds = '59'
      }
      else {
        this.seconds = (+this.seconds - 1).toString()
        this.seconds = +this.seconds < 10 ? '0' + this.seconds : this.seconds
      }
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
    this.seconds = '03'
    this.minutes = '00'
    this.hours = '00'
  }

  reset() {
    if (this.initialTime == undefined)
      return

    this.seconds = this.initialTime.seconds
    this.minutes = this.initialTime.minutes
    this.hours = this.initialTime.hours

    clearInterval(this.interval)
  }

  pause() {
    clearInterval(this.interval);
  }

  continue() {
    this.start()
  }

  // start: properties
  get Seconds(): string {
    return this.seconds
  }

  set Seconds(val: string) {
    this.seconds = val
  }

  get Minutes(): string {
    return this.minutes
  }

  set Minutes(val: string) {
    this.minutes = val
  }

  get Hours(): string {
    return this.hours
  }

  set Hours(val: string) {
    this.hours = val
  }
  // end: properties

}
