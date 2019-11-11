import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgErrorModule } from '@sahaz/ng-mat-ext';
import { MagicalFieldErrorComponent } from './magical-field-error/magical-field-error.component';

@NgModule({
  declarations: [MagicalFieldErrorComponent],
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, NgErrorModule
  ],
  exports: [MagicalFieldErrorComponent]
})
export class DemoModule { }
