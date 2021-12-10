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
    if (sessionStorage.getItem("loggedIn") == null) 
    {
      this.router.navigateByUrl('/login');
      return;
    }
  }

  redirectToHome()
  {
    this.router.navigateByUrl('/home');
  }
}
