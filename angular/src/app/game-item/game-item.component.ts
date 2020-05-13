import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "../ApiService";
import { Router } from '@angular/router';


const BASE_URL = "http://localhost:1337/Product/";


@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})

export class GameItemComponent implements OnInit {
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
    quantity:       Number;
    token:      String;
    message:    String;


  @Input() gameItem;
  @Output() buy = new EventEmitter();
  @Output() detail = new EventEmitter();
  gameObject: object = {};

  values = '';
  onClick(event){
    // console.log(event);
  }

  onBuy (){
    console.log("buy");
    this.buy.emit(this.gameItem);
  }
  onDetail(gameObj) {
    // console.log(this.gameItem.price);
    this.detail.emit(gameObj);
    return gameObj;
  }

  ngOnInit(): void {

  }
  
  constructor(private http: HttpClient,
        private router: Router) {
    // Pass in http module and pointer to AppComponent.
    this._apiService = new ApiService(http, this);
    this._http = http;
    this.loadUser()
    this.getAllProducts();
    }

    loadUser() {
      this._apiService.loadUser(this.loadUserCallback)
    }

    loadUserCallback(result, _this) {
      if(result.errorMessage == "") {
        _this.username = result.reqInfo.username;
      }
    }

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

  buyProduct(x,y,z,a,b,c,d) {
    // This free online service receives post submissions.
    let new_quantity = d - 1
    if (this.username != "") {
    this.http.put(BASE_URL + "Update",
        {
                _id:                x,
                productName:        y,
                category:           z,
                description:        a,
                price:              b,
                date:               c,
                quantity:           new_quantity,
                isSold:             true,
                buyers:             this.username,
                //seller:             "chicken",
        })
    .subscribe(
        // Data is received from the post request.
        (data) => {
            // Inspect the data to know how to parse it.
            console.log("PUT call successful. Inspect response.", 
                        JSON.stringify(data));
            this._errorMessage = data["errorMessage"];
            this.getAllProducts(); 
        },
        // An error occurred. Data is not received. 
        error => {
            this._errorMessage = error;                
        });
        
  }
  }

  refresh(){
    window.location.reload();
  }

}
