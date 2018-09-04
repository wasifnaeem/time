import { Component, OnInit } from '@angular/core';
import { ITimeUp } from '../../../interfaces/time-up.interface';

@Component({
  selector: 'app-timeup',
  templateUrl: './timeup.component.html',
  styleUrls: ['./timeup.component.scss']
})
export class TimeupComponent implements OnInit {

  timeup_parentRef: ITimeUp
  constructor() { }

  ngOnInit() {
  }

  timeUp() {
    this.timeup_parentRef.closeDialog_ITimeUp()
  }

}
