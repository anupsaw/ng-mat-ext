import { Injectable } from '@angular/core';
import { FormGroupDirective, FormControl, NgForm } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class NgErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.touched || control.dirty || isSubmitted));
    }
}
