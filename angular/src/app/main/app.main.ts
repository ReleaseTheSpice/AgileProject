import { Component, Inject }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "../ApiService";
import { Router } from '@angular/router';
import {lookForGames, lookupGameList} from '../providers';

const BASE_URL = "http://localhost:1337/Product/";

@Component({
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class Main {
    _apiService: ApiService;
    _errorMessage: string = '';
    username: string = '';
    _http:HttpClient;
    gameItems : Array<any>;
    _id:Number;
    name:String;
    //_errorMessage:String = "";
    _message:String = "";
    gameTitle:String;
    showForm: boolean = false;
    productName:    string = "";
    category:       string = "";
    description:    string = "";
    price:          number = 0;
    quantity:       number = 1;

    constructor(private http: HttpClient,
                @Inject(lookupGameList) public lookupLists,
                private router: Router) {
        // Pass in http module and pointer to AppComponent.
        this._apiService = new ApiService(http, this);
        this._http = http;
        //this.loadUser();
        this.getAllProducts();
    }

    // loadUser() {
    //   this._apiService.loadUser(this.loadUserCallback)
    // }

    // loadUserCallback(result, _this) {
    //   if(result.errorMessage == "") {
    //     _this.username = result.reqInfo.username;
    //   }
    // }

    getAllProducts() {
        let url = BASE_URL + 'Index'
        this._http.get<any>(url)
            // Get data and wait for result.
            .subscribe(result => {
                    this.gameItems = result.products;
                },

                error =>{
                    // Let user know about the error.
                    this._errorMessage = error;
                })
    }

    createProduct() {
        // This free online service receives post submissions.
        this.http.post(BASE_URL + "CreateProduct",
            {
                productName:    this.productName,
                category:       this.category,
                description:    this.description,
                price:          this.price,
                date:           Date.now(),
                quantity:       this.quantity,
                isSold:         false,
            })
            .subscribe(
                // Data is received from the post request.
                (data) => {
                    // Inspect the data to know how to parse it.
                    console.log("POST call successful. Inspect response.",
                        JSON.stringify(data));
                    if (data["errorMessage"] == "") {
                        this._message = "Menu item added!"
                        this._errorMessage = ""
                    }
                    else {
                        this._errorMessage = "Failed to add menu item."
                        this._message = ""
                    }
                    // this._errorMessage = data["errorMessage"];
                    this.getAllProducts();
                },
                // An error occurred. Data is not received.
                error => {
                    this._errorMessage = error;
                });
    }

    toggleChild(){
        this.showForm = !this.showForm;
    }
}
