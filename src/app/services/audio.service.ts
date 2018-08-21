import { Injectable } from '@angular/core';
import { IAudio } from '../interfaces/audio.interface';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio: HTMLAudioElement

  constructor() {
    this.audio = new Audio()
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
      const srcFile: string = `./assets/audio/${file_name}`
      this.audio = new Audio(srcFile)
      this.audio.load()
      this.audio.play()
    } catch (err) {
      console.log(err.message)
    }
  }

  volumeUp() {
    if (this.audio.volume < 1)
      this.audio.volume += 0.05
  }

  volumeDown() {
    if (this.audio.volume > 0)
      this.audio.volume -= 0.05
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

  volumeChanged(volume: number) {
    console.log('Volume: ' + volume);
    
    if (volume > 1)
      this.audio.volume = 1
    else if (volume < 0)
      this.audio.volume = 0
    else
      this.audio.volume = volume
  }

  get VOLUME(): number {
    return this.audio.volume
  }

  set VOLUME(val: number) {
    this.audio.volume = val
  }

}
