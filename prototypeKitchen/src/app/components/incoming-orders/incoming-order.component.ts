import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './incoming-order.component.html',
  styleUrls: ['./incoming-order.component.scss'],
})
export class IncomingOrderComponent implements OnInit {

  @Input() order;

  constructor() { }

  ngOnInit() {}

}
