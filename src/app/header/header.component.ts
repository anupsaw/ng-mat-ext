import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showExtension = false;
  constructor() { }

  ngOnInit() {
  }

  public onHover(): void {
    this.showExtension = !this.showExtension;
  }

}
