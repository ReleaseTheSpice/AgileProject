import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "./ApiService";
import { Router } from '@angular/router';


@Component({
    templateUrl: './app.forum.html'
})

//FIXME
export class Forum {
    _apiService: ApiService;
    messages: Array<any>;
    username: string = '';

    constructor(private http: HttpClient, private router: Router) {
        this._apiService = new ApiService(http, this);
        this.loadEvents();
        this.loadUser();
    }

}
