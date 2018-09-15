import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ElectronService } from "ngx-electron";
import { ITimeUp } from "../../../interfaces/time-up.interface";
import { TimerService } from "../../../services/timer.service";
import { TimeupComponent } from "../timeup/timeup.component";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent implements OnInit, ITimeUp {
  @ViewChild("media")
  media: ElementRef;
  isStarted: boolean = false;
  isPaused: boolean = false;

  is_small_screen: boolean = false;
  audioFile: string = "./assets/audio/time_up.mp3";
  repeatAlarm: boolean = true;

  innerHeight: any;
  innerWidth: any;

  message: string;
  constructor(
    private timerService: TimerService,
    private dialog: MatDialog
  ) {
    this.innerHeight = window.screen.height / 6;
    this.innerWidth = window.screen.width;
  }

  ngOnInit() {
    this.isStarted = false;
    this.isPaused = false;
    this.Audio.volume = 1;

    this.timerService.componentClassRef_Subject.next(this);
    this.onTimeUp();
  }

  screenSizeChanged() {
    console.log("size is being changed");

    if (this.is_small_screen) {
      // logic here
    }
  }

  // start: Time Events
  onTimeUp() {
    this.timerService.isTimeUp_Subject.subscribe((isTimeUp: boolean) => {
      if (isTimeUp) {
        this.playSound();
        this.openOKdialog();
      }
    });
  }

  start() {
    if (this.timerService.start()) {
      this.isStarted = true;
      this.isAudioPlaying = false;
    }
  }

  pause() {
    this.isPaused = true;
    this.timerService.pause();
  }

  continue() {
    this.isPaused = false;
    this.timerService.start();
  }

  stop() {
    this.isStarted = false;
    this.isPaused = false;
    this.timerService.stop();
  }
  // end: Time Events

  // start: Settings Events
  isSettingsOpened: boolean = false;
  isRotate: boolean = false;
  openSettings() {
    if (this.isSettingsOpened) {
      this.isSettingsOpened = false;
      return;
    }

    this.isSettingsOpened = true;
    this.isRotate = !this.isRotate;
    setTimeout(() => {
      this.isRotate = !this.isRotate;
    }, 500);
  }
  closeSettings() {
    this.isSettingsOpened = false;
  }
  // end: Settings Events

  // start: Sound Events
  isAudioPlaying: boolean = false;
  playSound() {
    this.Audio.play();
    this.isStarted = false;
    this.isAudioPlaying = true;
  }
  end() {
    this.isAudioPlaying = false;
  }
  // end: Sound Events

  // start: Events
  onHourFocusOut() {
    if (+this.Hours === 0 || this.Hours === undefined || +this.Hours === NaN)
      this.Hours = "00";
    else if (+this.Hours < 10) this.Hours = "0" + +this.Hours;
    else if (+this.Hours > 23) this.Hours = "23";
    else this.Hours = (+this.Hours).toString();
  }

  onMinuteFocusOut() {
    if (
      +this.Minutes === 0 ||
      this.Minutes === undefined ||
      +this.Minutes === NaN
    )
      this.Minutes = "00";
    else if (+this.Minutes < 10) this.Minutes = "0" + +this.Minutes;
    else if (+this.Minutes > 59) this.Minutes = "59";
    else this.Minutes = (+this.Minutes).toString();
  }

  onSecondFocusOut() {
    if (
      +this.Seconds === 0 ||
      this.Seconds === undefined ||
      +this.Seconds === NaN
    )
      this.Seconds = "00";
    else if (+this.Seconds < 10) this.Seconds = "0" + +this.Seconds;
    else if (+this.Seconds > 59) this.Seconds = "59";
    else this.Seconds = (+this.Seconds).toString();
  }

  // end: Events

  // start: properties
  get Seconds(): string {
    return this.timerService.Seconds;
  }

  set Seconds(val: string) {
    this.timerService.Seconds = val;
  }

  get Minutes(): string {
    return this.timerService.Minutes;
  }

  set Minutes(val: string) {
    this.timerService.Minutes = val;
  }

  get Hours(): string {
    return this.timerService.Hours;
  }

  set Hours(val: string) {
    this.timerService.Hours = val;
  }

  get Audio(): HTMLAudioElement {
    return this.media.nativeElement;
  }

  get Volume() {
    return this.Audio.volume * 100;
  }
  set Volume(val) {
    this.Audio.volume = val / 100;
  }
  // end: properties

  // start: non-related
  dialogRef: MatDialogRef<TimeupComponent>;
  closeDialog_ITimeUp() {
    this.Audio.pause();
    this.Audio.currentTime = 0;
    this.dialogRef.close();
  }

  openOKdialog() {
    this.dialogRef = this.dialog.open(TimeupComponent, {
      width: "50%",
      disableClose: true
    });
    let component = this.dialogRef.componentInstance;
    component.timeup_parentRef = this;
  }
  // end: non-related
}
