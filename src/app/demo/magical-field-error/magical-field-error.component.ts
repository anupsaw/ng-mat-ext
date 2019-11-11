import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-magical-field-error',
  templateUrl: './magical-field-error.component.html',
  styleUrls: ['./magical-field-error.component.scss']
})
export class MagicalFieldErrorComponent implements OnInit {

  lastNameError = true;

  user = new FormGroup({
    firstName: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
    lastName: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
    age: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
    city: new FormControl('', { validators: [Validators.required], updateOn: 'change' })
  });

  constructor() { }

  ngOnInit() {
  }

  lastNameErrorShow(): void {
    this.lastNameError = !this.lastNameError;
  }

}
