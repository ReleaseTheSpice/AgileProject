import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "./ApiService";
import { Router } from '@angular/router';


@Component({
  templateUrl: './main.html'
})

export class Main {
  _apiService: ApiService;
  events: Array<any>;
  username: string = '';

  constructor(private http: HttpClient, private router: Router) {
    // Pass in http module and pointer to AppComponent.
    this._apiService = new ApiService(http, this);
    this.loadEvents();
    this.loadUser();
  }

  loadUser() {
    this._apiService.loadUser(this.loadUserCallback)
  }
  loadUserCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.username = result.reqInfo.username;
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

  checkAttending(event) {
    // checks if the user is attending this event, and generates the value for the button
    if (event.attendees.indexOf(this.username)<0) {
      return 'Attend';
    } else { return 'Stop Attending'; }
  }

  attendEvent(event) {
    if (this.username == '') {
      this.router.navigate(['/login'])
    } else {
      this._apiService.putEventAttendees(event, this.username, this.attendCallback)
    }
  }
  attendCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.loadEvents();
    }
    else {
      alert(JSON.stringify(result.errorMessage));
    }
  }
}
