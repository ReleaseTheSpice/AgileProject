// @ts-ignore
import { Component }       from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './register.html'
})

export class Register {
  username: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  passConf: string = '';
  admin: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) {
  }

  validateUser() {
    let userList = [this.username, this.email, this.firstName, this.lastName, this.password];
    for (let i=0; i<userList.length; i++) {
      if (userList[i] == '') {
        return false;
      }
    }
    return this.password == this.passConf;
  }

    validEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }

  addUser() {
      if (this.username.length < 3) {
          return this.errorMessage = "Username must be more than 3 characters."
      }
      if (this.password.length <= 6) {
          this.passConf = "";
          this.password = "";
          return this.errorMessage = "Password must be at least 7 characters."
      }
      if (!(this.validEmail())) {
          this.email = '';
          return this.errorMessage = "Invalid email address. Please try again."
      }
      // This free online service receives post submissions.
      this.http.post("http://localhost:1337/User/RegisterUser",
      {
        username: this.username,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        passConf: this.passConf,
        admin: this.admin
      })
      .subscribe(
        // Data is received from the post request.
        (data) => {
          // Inspect the data to know how to parse it.
          this.errorMessage = data['errorMessage']['message'];
          console.log("POST call successful. Inspect response.",
            JSON.stringify(data));
        },
        // An error occurred. Data is not received.
        error => {

        });
  }
    refresh() {
        window.location.reload();
    }
}
