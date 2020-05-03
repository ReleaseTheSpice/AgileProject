import { Component }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "../ApiService";
import { Router } from '@angular/router';

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
    price:Number;
    _message:String = "";
    description:String;
    imgSrc:String;
    gameTitle:String;
    datePosted:Number = Date.now();
    isSold:Boolean = true;
    showForm: boolean = true;

    constructor(private http: HttpClient, private router: Router) {
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
                _id:            this._id,
                name:           this.name,
                price:          this.price,
                description:    this.description,
                gameTitle:      this.gameTitle,
                imgSrc:         this.imgSrc,
                datePosted:     this.datePosted,
                isSold:         this.isSold
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
