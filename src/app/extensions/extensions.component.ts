import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  // host: { '[@openClose]': 'isOpen ? \'open\' : \'closed\'' },
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        'max-height': '100px'
      })),
      state('closed', style({
        'max-height': '0px'
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ExtensionsComponent implements OnInit, OnChanges {

  @Input() isOpen = true;
  constructor() { }

  public ngOnInit() {
    this.toggle();
   }

  public ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line: no-unused-expression
    changes && changes.isOpen && this.toggle(changes.isOpen.currentValue);
  }

  public toggle(isOpen?: boolean) {
    this.isOpen = !this.isOpen;
  }

}
