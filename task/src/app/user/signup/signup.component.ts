import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  countries = {'india' : '+91', 'usa': '+01'};
  cnfPass = false;

  constructor() { }

  ngOnInit(): void {

    this.initForm()

  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onChangeCountry(e) {
    this.signupForm.patchValue({
      'mobileNoPrefix' : this.countries[e.target.value]
    })
  }

  passCheck(pass1: string, pass2: string) {
    console.log(pass1, pass2)
  }

  private initForm() {

    let countries = new FormArray([], Validators.required);

    this.signupForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'addressLine1' : new FormControl('', Validators.required),
      'addressLine2' : new FormControl(''),
      'country' : new FormControl(''),
      'mobileNoPrefix' : new FormControl({value: '', disabled: true}),
      'mobileNo' : new FormControl('', Validators.required),
      'password' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'confirmPassword' : new FormControl('', [Validators.required, Validators.minLength(8)]),

    })
  }

}
