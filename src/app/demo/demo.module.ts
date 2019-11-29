import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgErrorModule } from '@sahaz/ng-mat-ext';
import { MagicalFieldErrorModule } from './magical-field-error/magical-field-error.module';

@NgModule({
  imports: [
    CommonModule, MatFormFieldModule,
    MatInputModule, MatIconModule,
    ReactiveFormsModule, NgErrorModule,
    MagicalFieldErrorModule
  ]
})
export class DemoModule { }
