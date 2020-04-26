import { Component, OnInit }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "./ApiService";
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './viewAttendees.html'
})

export class ViewAttendees implements OnInit {
  _apiService: ApiService;
  event;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this._apiService = new ApiService(http, this);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.event = params.get('event');
      this.loadUser();
    });
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

  loadEvents() {
    this._apiService.getData('Event/GetEvents',
      this.eventCallback);
  }
  // Callback needs a pointer '_this' to current instance.
  eventCallback(result, _this) {
    if(result.errorMessage == "") {
      let events = result.events;
      for (let i=0; i<events.length; i++) {
        if (events[i].name == _this.event) {
          _this.event = events[i];
        }
      }
    }
    else {
      alert(JSON.stringify(result.errorMessage));
    }
  }
}
