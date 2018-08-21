import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { IAudio } from '../../interfaces/audio.interface';
import { TimerService } from '../../services/timer.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  isStarted: boolean = false
  isPaused: boolean = false
  isAudioRepeat: boolean
  audio_file_name: string

  constructor(
    private audioService: AudioService,
    private timerService: TimerService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.onTimeUp()
  }

  onTimeUp() {
    this.timerService.isTimeUp_Subject.subscribe((isTimeUp: boolean) => {
      if (isTimeUp) {
        if (!this.audio_file_name)
          return this.snackbar.open('No audio file is selected', 'dismiss', {
            duration: 2000,
            horizontalPosition: 'center'
          })

        this.isStarted = true
        this.audioService.play(this.audio_file_name)
      }
    })
  }

  // start: audio controls

  play() {
    try {
      if (!this.audio_file_name)
        return this.snackbar.open('no audio file selected', 'dismiss', { duration: 2000 })

      this.isStarted = true
      this.isPaused = false
      this.audioService.play(this.audio_file_name)
    } catch (err) {
      console.log(err.message)
    }
  }

  pause() {
    this.isPaused = true
    this.audioService.pause()
  }

  continue() {
    this.isPaused = false
    this.audioService.continue()
  }

  stop() {
    this.isPaused = false
    this.isStarted = false
    this.audioService.stop()
  }

  // end: audio controls

  // start: volume
  formatLabel(value: number | null) {
    if (this.audioService)
      this.audioService.volumeChanged(value)

    if (!value) {
      return 0;
    }

    return value * 100
  }
  // end: volume

  get AudioFiles(): Array<IAudio> {
    return this.audioService.audios
  }
}
