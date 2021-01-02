import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
  now;
  month;

  constructor() { }

  ngOnInit(): void {
  }

  isWinter() {
    this.now = new Date();
    this.month = this.now.getMonth()
    return this.month == 11 ? this.now.getDate() >= 21 : this.month == 2 ? this.now.getDate() < 21 : this.month < 2;
  }

}
