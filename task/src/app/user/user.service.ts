import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userData: User[] = [
    new User("paritosh", "test@email.com", 
            "password1", "abc new delhi", "india", 7011001100)
  ];

  getUserByName(name: string) {
    return this.userData.find((data: User) => {
      return data.name === name;
    })
  }

  loginUser(email: string, password: string) {
    console.log(email, password)
    return this.userData.find((data: User) => {
      return data.email === email && data.password === password;
      }
    );
  }

}
