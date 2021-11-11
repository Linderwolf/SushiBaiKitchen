import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  public submitted: boolean = false;
  public loading: boolean = false;



  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

  async onLogin(){
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      this.loading = false;
      return;
    }


    this.loading = false;
    this.router.navigateByUrl('/home')
  }


}
