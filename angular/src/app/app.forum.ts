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
    events: Array<any>;
    username: string = '';

    constructor(private http: HttpClient, private router: Router) {
    }

}
