import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blockchain-review-app';

  show: boolean = false;

  constructor() {
    setTimeout(() => {
      this.show = true;
    }, 1500);
  }
}
