import {
  Component, OnInit, Input,
  HostBinding, ViewContainerRef,
  OnDestroy, ViewEncapsulation, ElementRef
} from '@angular/core';
import { NgError } from './ng-error-message-registry';

@Component({
  selector: 'ng-error, mat-error-ext',
  templateUrl: './ng-error.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NgErrorComponent implements OnInit, NgError, OnDestroy {

  private static compCounter = 0;
  public static errorContainerRef = new Map<string, NgErrorComponent>();
  @Input() type: string;
  @Input() for: string;
  @Input() message: string;
  @Input() priority: number;
  @Input() value?: any;

  public errorMessage: string;

  @HostBinding('attr.id') id = `ng-error-${NgErrorComponent.compCounter++}`;
  constructor(public readonly container: ViewContainerRef) {

  }

  public ngOnInit() {
    NgErrorComponent.errorContainerRef.set(this.id, this);
  }

  public ngOnDestroy() {
    NgErrorComponent.errorContainerRef.delete(this.id);
  }

  public destroy(id?: string): void {
    this.container.element.nativeElement.remove();
    this.ngOnDestroy();
  }



}
