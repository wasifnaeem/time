import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatSnackBarModule, MatCardModule, MatDialogModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSliderModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSliderModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
  ],
  declarations: []
})
export class MaterialModule { }
