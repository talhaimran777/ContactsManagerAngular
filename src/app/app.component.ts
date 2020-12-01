import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStyles: any;
  makeTitleRed = true;

  constructor() {
    this.currentStyles = {
      color: this.makeTitleRed === true ? 'red' : 'green',
    };
  }
}
