import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from './ApiService';
import { Router } from '@angular/router';


@Component({
  templateUrl: './createEvent.html'
})

export class CreateEvent {
  _apiService: ApiService;
  name: string = '';
  description: string = '';
  date: string = '';
  time: string = '';
  errorMessage: string = '';
  events: Array<any>;


  constructor(private http: HttpClient) {
    this._apiService = new ApiService(http, this);
    this.loadUser()
  }

  loadUser() {
    this._apiService.loadUser(this.loadUserCallback, true)
  }
  loadUserCallback(result, _this) {
    if(result.errorMessage == "") {
      if (result.reqInfo.roles.indexOf('Admin') < 0) {
        window.location.href = 'http://localhost:4200/main';
        window.alert("Hey!  You're not an Admin! Get out of here!")
      } else {
        _this.loadEvents();
      }
    }
  }

  validateEvent() {
    let evnList = [this.name, this.description, this.date, this.time];
    for (let i=0; i<evnList.length; i++) {
      if (evnList[i] == '') {
        return false;
      }
    }
    for (let i=0; i<this.events.length; i++) {
      let currEvn = this.events[i];
      if (currEvn == this.name) {
        return false;
      }
    }
    return true;
  }

  getDate(input) {
    //returns 2020 Feb 20
    let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return (months[input.substring(5,6)] + input.substring(7,10));
  }

  getTime(input) {
    //returns 6:00PM
    var hour = parseInt(input.substring(0,2));
    var min = parseInt(input.substring(3,5));
    var suffix = 'AM';
    if (hour > 12) {
      hour -= 12;
      suffix = 'PM'
    }
    if (min < 10) {
      var minut = '0' + min.toString()
    } else {var minut = min.toString()}
    return hour.toString() + ':' + minut + suffix;
  }

  addEvent() {
    console.log(this.getDate(this.date));
    this.http.post('http://localhost:1337/Event/CreateEvent',

      {
        name: this.name,
        date: this.getDate(this.date),
        time: this.getTime(this.time),
        description: this.description
      }).subscribe(
      (data) => {
        console.log("POST call successful. Inspect response.", JSON.stringify(data));
        this.errorMessage = data["errorMessage"];
        if (this.errorMessage == '') {
          window.location.href = 'http://localhost:4200/eventManager';
        }
      },
      error => {
        this.errorMessage = error
      }
    )
  }

  loadEvents() {
    this._apiService.getData('Event/GetEvents',
      this.eventCallback);
  }
  // Callback needs a pointer '_this' to current instance.
  eventCallback(result, _this) {
    if(result.errorMessage == "") {
      _this.events = result.events;
      console.log(_this.events.keys())
    }
    else {
      alert(JSON.stringify(result.errorMessage));
    }
  }
}
