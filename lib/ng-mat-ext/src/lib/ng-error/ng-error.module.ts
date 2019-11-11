import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_ERROR_MESSAGE_PROVIDER } from './ng-error-message-registry';
import { NgErrorComponent } from './ng-error.component';
import { NgErrorDirective } from './ng-error.directive';
@NgModule({
  declarations: [NgErrorComponent, NgErrorDirective],
  imports: [
    CommonModule
  ],
  providers: [NG_ERROR_MESSAGE_PROVIDER],
  exports: [NgErrorComponent, NgErrorDirective],
  entryComponents: [NgErrorComponent]
})
export class NgErrorModule { }

export * from './ng-error-message-registry';
export * from './ng-error-state-matcher';
export * from './ng-error.component';
export * from './ng-error.directive';
