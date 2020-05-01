import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "./ApiService";
import { Router } from '@angular/router';


const BASE_URL = "http://localhost:1337/Message/";

@Component({
    templateUrl: './app.forum.html'
})

export class Forum {
    _messagesArray: Array<any>;
    _http:HttpClient;
    _id:Number;
    _date:Date;
    _errorMessage:String = "";
    _message:String = "";
    _authorName:String = "";
    _content:String = "";
    admin                 = false;
    username              = '';
    test  = '';
    token                 = '';
    message               = 'Not logged in.';
    secureData:string     = '';
    reqInfo:any           = null;
    _apiService:ApiService;
    public site='http://localhost:1337/';

    constructor(private http: HttpClient, private router: Router) {
        this._http = http;
        this._apiService = new ApiService(http, this);
        this.showContentIfLoggedIn();
        this.getAllMessages();
    }

    showContentIfLoggedIn() {
        // Logged in if token exists in browser cache.
        if(sessionStorage.getItem('auth_token')!=null) {
            this.token   = sessionStorage.getItem('auth_token');
            this.message = "The user has been logged in.";
            this.getSecureData()
        }
        else {
            this.message = "Not logged in.";
            this.token   = ''
        }
    }

    getSecureData() {
        this._apiService.getData('User/SecureAreaJwt',
            this.secureDataCallback);
    }
    // Callback needs a pointer '_this' to current instance.
    secureDataCallback(result, _this) {
        if(result.errorMessage == "") {
            _this.secureData = result.secureData;
            _this.reqInfo = result.reqInfo;
            _this.username = result.reqInfo.username;
            if (result.reqInfo.roles.indexOf('Admin') >= 0) {
                _this.admin = true;
            }
        }
        else {
            alert(JSON.stringify(result.errorMessage));
        }
    }

    getAllMessages() {
        let url = BASE_URL + 'GetMessages'
        this._http.get<any>(url)
            // Get data and wait for result.
            .subscribe(result => {
                    this._messagesArray = result.messages;
                },

                error =>{
                    // Let user know about the error.
                    this._errorMessage = error;
                })
    }

    createMessage() {
        // This free online service receives post submissions.
        this.http.post(BASE_URL + "CreateMessage",
            {
                //_id:            this._id,
                author:         this.username, // FIX THISSSS
                content:        this._content,
                date:           Date.now()
                //replies:
                //reply:
            })
            .subscribe(
                // Data is received from the post request.
                (data) => {
                    // Inspect the data to know how to parse it.
                    console.log("POST call successful. Inspect response.",
                        JSON.stringify(data));
                    if (data["errorMessage"] == "") {
                        this._message = "Message added!"
                        this._errorMessage = ""
                    }
                    else {
                        this._errorMessage = "Failed to add message."
                        this._message = ""
                    }
                    // this._errorMessage = data["errorMessage"];
                    this.getAllMessages();
                },
                // An error occurred. Data is not received.
                error => {
                    this._errorMessage = error;
                });
    }

    clearMessage() {
        this._content = "";
    }
}
