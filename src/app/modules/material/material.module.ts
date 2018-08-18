import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
