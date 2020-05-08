import {Component, ViewEncapsulation} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from "../ApiService";
import { Router } from '@angular/router';
import {error} from "util";


const BASE_URL = "http://localhost:1337/Message/";

@Component({
    templateUrl: './forum.html',
    encapsulation: ViewEncapsulation.None
})

export class Forum {
    msgArray: Array<any>;
    replyArray: Array<any>;
    currentThread;
    currentReplies: Array<any>;
    _http:HttpClient;
    _id:Number;
    _errorMessage:String = "";
    _content:String = "";
    _replyContent:String = "";
    admin                 = false;
    username              = '';
    token                 = '';
    message               = 'Not logged in.';
    secureData:string     = '';
    reqInfo:any           = null;
    _apiService:ApiService;

    constructor(private http: HttpClient, private router: Router) {
        this._http = http;
        this._apiService = new ApiService(http, this);
        this.showContentIfLoggedIn();
        this.getAllMessages();
    }

    changecolor(id) {
        document.getElementById(id).style.backgroundColor="red"
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
        let url = BASE_URL + 'GetMessages';
        this._http.get<any>(url)
            // Get data and wait for result.
            .subscribe(result => {
                    this.sortMessages(result.messages)
                },

                error =>{
                    // Let user know about the error.
                    this._errorMessage = error;
                })
    }

    sortMessages(messages) {
        let msgs = [];
        let replies = [];
        for (let i=0;i<messages.length;i++) {
            let msg = messages[i];
            if (msg.reply) {
                replies.push(msg)
            } else {
                msgs.push(msg)
            }
        }
        this.msgArray = msgs;
        this.replyArray = replies;
        this.resetCurrentThread();
    }

    setCurrentThread(message) {
        this.currentThread = message;
        this.currentReplies = [];
        let url = BASE_URL + 'GetMessagesById';
        this._http.get<any>(url, {
            params: {
                ids: [message.replies]
            }
        })
            // Get data and wait for result.
            .subscribe(result => {
                    this.currentReplies = result.messages;
                },error =>{
                    // Let user know about the error.
                    this._errorMessage = error;
                })
    }

    createMessage(replyingTo: number=-1) {
        // If user is not logged in, send them to the login page.
        if (this.username == '') {
            this.router.navigate(['/login'])
        }

        //Check if the message is a reply.
        if (replyingTo<0) {
            var reply = false;
            var content = this._content
        } else {
            var reply = true;
            var content = this._replyContent
        }

        // This free online service receives post submissions.
        this.http.post(BASE_URL + "CreateMessage",
            {
                //_id:            this._id,
                author:         this.username,
                content:        content,
                date:           Date.now(),
                replies:        [],
                reply:          reply,
                replyingTo:     replyingTo
            })
            .subscribe(
                // Data is received from the post request.
                (data) => {
                    // Inspect the data to know how to parse it.
                    console.log("POST call successful. Inspect response.",
                        JSON.stringify(data));
                    if (data["errorMessage"] == "") {
                        this._errorMessage = ""
                    }
                    else {
                        this._errorMessage = "Failed to add message.";
                    }
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
    clearReply() {
        this._replyContent = ""
    }

    vote(upvote, message) {
        let url = BASE_URL + 'Vote';
        this._http.put(url, {
            _id: message._id,
            upVote: upvote
        })
            // Get data and wait for result.
            .subscribe(result => {
                    console.log("This is the message that was voted:");
                    console.log(result);
                    // @ts-ignore
                    this.currentThread.votes = result.message.votes;
                    this.getAllMessages();
                },
                error =>{
                    // Let user know about the error.
                    this._errorMessage = error;
                })

    }

    resetCurrentThread() {
        if (this.currentThread) {
            try {
                let id = this.currentThread._id;
                for (let i=0;i<this.msgArray.length;i++) {
                    let msg = this.msgArray[i];
                    if (msg._id == id) {
                        this.setCurrentThread(msg);
                        var pass = true;
                    }
                }
                if (!pass) { throw error}
            } catch (e) {
                this._errorMessage = e;
                console.log("error in resetting current thread.");
                console.log(e);
            }
        } else {
            let errMsg = "no current thread selected.";
            console.log(errMsg);
            this._errorMessage = errMsg;
        }
    }


    delete(msgID) {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            "body": { _id:msgID}
        };
        let url = BASE_URL + 'Delete';
        this._http.delete<any>(url, httpOptions)
            // Get data and wait for result.
            .subscribe(result => {
                this.getAllMessages();
            },error =>{
                // Let user know about the error.
                this._errorMessage = error;
            })
    }
}

