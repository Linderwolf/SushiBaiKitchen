import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup;

  public submitted: boolean = false;
  public loading: boolean = false;

  public validPassword: boolean = true;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSignup(){
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      this.loading = false;
      return;
    }


    this.loading = false;
    this.router.navigateByUrl('/login')
  }

  checkPasswords(){
    console.log("Checking passwords")
    if(this.f.username.value==this.f.confirmPassword.value){
      this.validPassword = true;
    }else{
      this.validPassword = false;
    }
  }

}
