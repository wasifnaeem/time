import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { StopWatchComponent } from '../../components/stop-watch/stop-watch.component';
import { TimerComponent } from '../../components/timer-components/timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: TimerComponent
  },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'stop-watch',
    component: StopWatchComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
