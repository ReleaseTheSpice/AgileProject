import { Component, Inject }       from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from "../ApiService";
import { Router, NavigationEnd } from '@angular/router';

const BASE_URL = "http://localhost:1337/Product/";

@Component({
    templateUrl: './purchases.html',
    styleUrls: ['./purchases.css']
})


export class Purchases {
    _apiService: ApiService;
    _errorMessage: string = '';
    username: string = '';
    _http:HttpClient;
    products: Array<any>;
    myproducts: Array<any>;
    salesArray: Array<any>;
    _id:Number;
    name:String;
    //_errorMessage:String = "";
    _message:String = "";
    gameTitle:String;
    showForm: boolean = false;
    token:      String;
    message:    String;
    secureData:string     = '';
    reqInfo:any           = null;

    constructor(private http: HttpClient,
                private router: Router) {
        // Pass in http module and pointer to AppComponent.
        this._apiService = new ApiService(http, this);
        this._http = http;
        this.loadUser()
        this.showContentIfLoggedIn();
        //this.getAllSaleProducts();
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.getAllSaleProducts();
            }
          })
    }

    ngOnInit(){
        
            let url = BASE_URL + 'Index'
            this._http.get<any>(url)
                // Get data and wait for result.
                .subscribe(result => {
                        this.myproducts = result.products.filter(sale => sale.buyers.includes(this.username)) // FIXMEEEEE this.username
                    },
    
                    error =>{
                        // Let user know about the error.
                        this._errorMessage = error;
                    })
        
    }

    loadUser() {
      this._apiService.loadUser(this.loadUserCallback)
    }

    loadUserCallback(result, _this) {
      if(result.errorMessage == "") {
        _this.username = result.reqInfo.username;
      }
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

    getAllSaleProducts() {
        let url = BASE_URL + 'Index'
        this._http.get<any>(url)
            // Get data and wait for result.
            .subscribe(result => {
                    this.myproducts = result.products.filter(sale => sale.buyers.includes(this.username)) // FIXMEEEEE this.username
                },

                error =>{
                    // Let user know about the error.
                    this._errorMessage = error;
                })
    }


}