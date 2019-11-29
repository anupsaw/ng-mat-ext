import {
  Directive, AfterViewInit, OnDestroy, ComponentRef, ViewContainerRef,
  Inject, ComponentFactoryResolver, ChangeDetectorRef
} from '@angular/core';
import { NgErrorComponent } from './ng-error.component';
import { Subscription } from 'rxjs';
import { NgError, NG_ERROR_MESSAGE_REGISTRY } from './ng-error-message-registry';
import { NgControl, FormControl, FormGroupDirective } from '@angular/forms';
import { NgErrorStateMatcher } from './ng-error-state-matcher';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngError], [matErrorExt]'
})
export class NgErrorDirective implements AfterViewInit, OnDestroy {


  private errorCompRef: ComponentRef<NgErrorComponent>;
  private subscription: Subscription;
  private customErrors: NgError[] = [];
  constructor(
    public ngControl: NgControl,
    public container: ViewContainerRef,
    private readonly errorStateMatcher: NgErrorStateMatcher,
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    @Inject(NG_ERROR_MESSAGE_REGISTRY) public registeredErrorMessages: NgError[]
  ) { }

  public ngAfterViewInit(): void {
    this.includeNgErrorTemplate();
    this.subscribeControlEvents();
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public createErrorComponent(comp: NgErrorComponent) {
    if (!this.errorCompRef) {
      const ref = this.resolver.resolveComponentFactory(NgErrorComponent);
      this.errorCompRef = ref.create(this.container.injector);
    }
    if (comp) {
      (comp.container as any)._data.renderElement.replaceWith(this.errorCompRef.location.nativeElement);
      this.errorCompRef.hostView.detectChanges();
    } else {
      this.container.insert(this.errorCompRef.hostView);
    }

  }

  private updateErrorStatus(): void {
    this.matchErrorAndUpdateMessage();
  }

  public includeNgErrorTemplate(): void {

    const errorComp = document.querySelectorAll(`ng-error[for="${this.ngControl.name}"]`);
    let firstComp = null;
    errorComp.forEach((item: HTMLElement, index: number) => {
      const comp = NgErrorComponent.errorContainerRef.get(item.id);
      this.customErrors.push(NgError.create(comp.type, comp.message, comp.priority || 1));
      index === 0 ?
        firstComp = comp
        : comp.destroy();
    });
    this.createErrorComponent(firstComp);
    this.cd.detectChanges();
  }

  private matchErrorAndUpdateMessage(): void {
    let error: NgError = null;
    const formControl = this.ngControl ? this.ngControl.control as FormControl : null;
    const parent = formControl ? formControl.parent as unknown as FormGroupDirective : null;
    const hasError = this.ngControl.errors && this.errorStateMatcher.isErrorState(formControl, parent);

    if (hasError) {
      for (const err in this.ngControl.errors) {
        if (err) {
          error = this.getMatchedError(err, error);
        }
      }
    }

    this.updateMessage(error && error.message || '');
  }

  private updateMessage(msg: string): void {
    this.errorCompRef.instance.errorMessage = msg;
    this.errorCompRef.hostView.detectChanges();
  }

  private subscribeControlEvents(): void {

    this.subscription = this.ngControl.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(() => this.updateErrorStatus());
  }

  private getMatchedError(type: string, error: NgError): NgError {

    const errorList = [...this.customErrors, ...this.registeredErrorMessages].sort((a, b) => b.priority - a.priority);
    for (const item of errorList) {
      if (item.type === type) {
        if (!error || (error && item.priority > error.priority)) {
          error = item;
        }
        break;
      }
    }
    return error;
  }

  // private markControlAsUntouched(): void {
  //   this.ngControl && this.ngControl.control && this.ngControl.control.pristine && this.ngControl.control.markAsUntouched();
  // }

  getRequiredValue(error: any): any {
    return error && error.requiredLength || error.requiredValue || null;
  }

  private formatString(str: string, ...args: string[]): string {
    args.forEach((item: string, index: number) => {
      const regex = new RegExp(`\\{[${index}]\\}`);
      str = str.replace(regex, item);
    });
    return str;
  }

}
