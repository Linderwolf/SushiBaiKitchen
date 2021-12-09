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

  ngOnInit() 
  {
    this.form = this.formBuilder.group
    ({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])],
      password: ['', Validators.compose([Validators.required, Validators.pattern("[^ ]{6,}")])],
      confirmPassword: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSignup()
  {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.form.invalid) 
    {
      this.loading = false;
      return;
    }

    this.loading = false;
    this.router.navigateByUrl('/login')
  }

  checkPasswords()
  {
    console.log("Checking passwords")
    if(this.f.password.value == this.f.confirmPassword.value) this.validPassword = true;
    else this.validPassword = false;
  }
}
