import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "./ApiService";

@Component({
  templateUrl: './myEvents.html'
})

export class MyEvents {
  _apiService: ApiService;
  events: Array<any>;
  myEvents: Array<any>;
  username: string = '';

  constructor(private http: HttpClient) {
    this._apiService = new ApiService(http, this);
    this.loadUser();
  }

  loadUser() {
    this._apiService.loadUser(this.loadUserCallback)
  }
  loadUserCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.username = result.reqInfo.username;
      _this.loadEvents()
    }
  }

  loadEvents() {
    this._apiService.getData('Event/GetEvents',
      this.eventCallback);
  }
  eventCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.events = result.events;
      _this.myEvents = result.events.filter(function (el) {
        return !(el.attendees.indexOf(_this.username)<0);
      });
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
    this._apiService.putEventAttendees(event, this.username, this.attendCallback)
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
