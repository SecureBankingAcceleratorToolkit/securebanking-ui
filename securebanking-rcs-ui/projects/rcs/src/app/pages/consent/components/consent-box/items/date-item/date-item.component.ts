import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-item',
  templateUrl: './date-item.component.html'
})
export class DateItemComponent implements OnInit {
  label: string;
  date: Date;
  cssClass: string;

  payload: any;

  constructor() {}

  ngOnInit() {}
}
