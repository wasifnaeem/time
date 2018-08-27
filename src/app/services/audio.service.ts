import { Injectable } from '@angular/core';
import { IAudio } from '../interfaces/audio.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio: HTMLAudioElement = new Audio()

  constructor() {
  }

  audios: IAudio[] = [
    { title: '3D Bird Tone', file_name: '3d_bird_tone.mp3' },
    { title: 'Alarm 2', file_name: 'alarm_2.mp3' },
    { title: 'Bird SMS 2', file_name: 'bird_sms_2.mp3' },
    { title: 'Bird SMS', file_name: 'bird_sms.mp3' },
    { title: 'Birds', file_name: 'birds.mp3' },
    { title: 'SMS 2', file_name: 'sms_2.mp3' },
    { title: 'SMS', file_name: 'sms.mp3' }
  ]

  play(file_name: string) {
    try {
      this.audio.volume = 1
      const srcFile: string = `./assets/audio/${file_name}`
      this.audio = new Audio(srcFile)
      this.audio.load()
      this.audio.play()
    } catch (err) {
      console.log(err.message)
    }
  }

  pause() {
    this.audio.pause()
  }

  continue() {
    this.audio.play()
  }

  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
  }

  get Volume(): number {
    return this.audio.volume
  }

  set Volume(val: number) {
    if (val > 1)
      this.audio.volume = 1
    else if (val < 0)
      this.audio.volume = 0
    else
      this.audio.volume = val
  }

}
