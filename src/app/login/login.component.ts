import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommanService} from '../services/comman/comman.service';
import { CustomValidators } from 'ng2-validation';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
const password = new FormControl('', Validators.required);


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  errorMessage: string ;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _httpCall: CommanService
  ) {}

  /*Get data function*/
  get f() { return this.form.controls; }

  ngOnInit() {
    this.form = this._fb.group({
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]],
    });
  }
  onSubmit() {
    console.log('data', this.f.email.value , this.f.password.value);

    // this.router.navigate(['/home']);
  }

}
