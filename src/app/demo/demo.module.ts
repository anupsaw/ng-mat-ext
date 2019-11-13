import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgErrorModule } from '@sahaz/ng-mat-ext';
import { MagicalFieldErrorComponent } from './magical-field-error/magical-field-error.component';
import { CodeBlockComponent } from '../code-block/code-block.component';

@NgModule({
  declarations: [MagicalFieldErrorComponent, CodeBlockComponent],
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, NgErrorModule
  ],
  exports: [MagicalFieldErrorComponent]
})
export class DemoModule { }
