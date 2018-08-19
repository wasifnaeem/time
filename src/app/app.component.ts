import { Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isFullScreen: boolean = true
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (screenfull.enabled) {
      if (event.key === "f") {
        if (this.isFullScreen) {
          screenfull.request();
          this.isFullScreen = true
        }

        if (!this.isFullScreen) {
          screenfull.exit();
          this.isFullScreen = false
        }

        this.isFullScreen = !this.isFullScreen
      }
    }
  }
}
