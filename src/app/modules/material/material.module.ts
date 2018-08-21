import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule, MatSelectModule, MatSnackBarModule, MatProgressBarModule, MatSliderModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSliderModule,

  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSliderModule,
  ],
  declarations: []
})
export class MaterialModule { }
