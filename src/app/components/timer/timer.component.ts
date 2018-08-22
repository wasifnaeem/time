import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ITime } from '../../interfaces/time.interface';
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

  form: FormGroup

  constructor(
    private timerService: TimerService,
    private fb: FormBuilder
  ) {
    this.innerHeight = window.screen.height / 5
    this.innerWidth = window.screen.width
  }

  ngOnInit() {
    this.createForm()

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
    if (+this.hours.value > 0 || +this.minutes.value > 0 || +this.seconds.value > 0) {
      this.isStarted = true
      this.timerService.startTimer()
    }
  }

  pause() {
    this.isPaused = true
    this.timerService.pauseTimer()
  }

  continue() {
    this.isPaused = false
    this.timerService.startTimer()
  }

  stop() {
    this.isStarted = false
    this.isPaused = false
    this.timerService.stopTimer()
  }

  // start: form and its validations

  hoursInput() {
    if (this.hours.value < 10)
      this.hours.setValue('0' + this.hours.value)
    else if (this.hours.value > 23)
      this.hours.setValue('23')
  }

  minutesInput() {
    if (this.minutes.value < 10)
      this.minutes.setValue('0' + this.minutes.value)
    else if (this.minutes.value > 59)
      this.minutes.setValue('59')
  }

  secondsInput() {
    if (this.seconds.value < 10)
      this.seconds.setValue('0' + this.seconds.value)
    else if (this.seconds.value > 59)
      this.seconds.setValue('59')
  }

  setFormValues(time: ITime) {
    this.hours.setValue(time.hours)
    this.minutes.setValue(time.minutes)
    this.seconds.setValue(time.seconds)
  }

  createForm() {
    this.form = this.fb.group({
      hours: this.fb.control('01', [Validators.required]),
      minutes: this.fb.control('00', [Validators.required]),
      seconds: this.fb.control('03', [Validators.required])
    })
  }

  get hours(): AbstractControl {
    return this.form.controls['hours']
  }

  get minutes(): AbstractControl {
    return this.form.controls['minutes']
  }

  get seconds(): AbstractControl {
    return this.form.controls['seconds']
  }

  // end: form and its validations

}
