import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  isScrollbarVisible: boolean = false;

  constructor() {}

  toggleScrollbar(): void {
    this.isScrollbarVisible = !this.isScrollbarVisible;
  }
}
