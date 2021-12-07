import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() 
  {

  }

  redirectToHome()
  {
    this.router.navigateByUrl('/home');
  }
}
