import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicalFieldErrorComponent } from './magical-field-error.component';

describe('MagicalFieldErrorComponent', () => {
  let component: MagicalFieldErrorComponent;
  let fixture: ComponentFixture<MagicalFieldErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicalFieldErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicalFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
