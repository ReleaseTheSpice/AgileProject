import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "./ApiService";
import { Router } from '@angular/router';
import {ViewAttendees} from "./app.viewAttendees";

const URL = 'http://localhost:1337/';

@Component({
  templateUrl: './eventManager.html'
})

export class EventManager {
  _apiService: ApiService;
  events: Array<any>;
  username: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this._apiService = new ApiService(http, this);
    this.loadUser();
  }

  delete(name) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      "body": { name:name}
    };
    let url = URL + 'Event/Delete';
    this.http.delete(  url , httpOptions)
      .subscribe((data) => {
        this.loadEvents();
      });
  }

  viewAttendees(event) {
    this.router.navigate(["/viewAttendees", event])
  }
  makeEvent() {
    this.router.navigate(["/createEvent"])
  }

  loadUser() {
    this._apiService.loadUser(this.loadUserCallback, true)
  }
  loadUserCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.username = result.reqInfo.username;
      if (result.reqInfo.roles.indexOf('Admin') < 0) {
        window.location.href = 'http://localhost:4200/main';
        window.alert("Hey!  You're not an Admin! Get out of here!")
      } else {
        _this.loadEvents();
      }
    }
  }

  loadEvents() {
    this._apiService.getData('Event/GetEvents',
      this.eventCallback);
  }
  // Callback needs a pointer '_this' to current instance.
  eventCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.events = result.events;
    }
    else {
      alert(JSON.stringify(result.errorMessage));
    }
  }
  }
