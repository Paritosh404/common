import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  authCheck = true;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  onSubmit() {
    const value = this.userForm.value;
    const resp = this.userService.loginUser(value.email, value.password);
    if(resp === undefined){
      this.authCheck = false;
    }
    else {
      this.authCheck = true;
      this.router.navigate([`/dashboard/${resp.name}`])
    }
  }

  private initForm() {

    this.userForm = new FormGroup({
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('', [Validators.required])
    });
  }

}
