import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatSnackBarModule, MatCardModule, MatDialogModule, MatToolbarModule } from "@angular/material";

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
    MatToolbarModule,
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
    MatToolbarModule,
  ],
  declarations: []
})
export class MaterialModule { }
