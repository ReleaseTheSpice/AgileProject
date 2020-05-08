function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createEvent/createEvent.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createEvent/createEvent.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateEventCreateEventHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Create Event</title>\r\n</head>\r\n<body>\r\nCreate a New Event!\r\n<div>\r\n  <b>Event Name: </b>\r\n  <td><input mdbInput type=\"text\" name=\"name\" [(ngModel)]=\"name\" required></td>\r\n  <br>\r\n  <b>Event Description: </b>\r\n  <td><input mdbInput type=\"text\" name=\"description\" [(ngModel)]=\"description\" required></td>\r\n  <br>\r\n  <b>Event Time: </b>\r\n  <td><input mdbInput type=\"time\" name=\"time\" [(ngModel)]=\"time\" required></td>\r\n  <br>\r\n  <b>Event Date: </b>\r\n  <td><input mdbInput type=\"date\" name=\"date\" [(ngModel)]=\"date\" min=\"2018-01-01\" max=\"9999-12-31\" required></td>\r\n  <br>\r\n{{errorMessage}}\r\n  <br>\r\n  <br>\r\n  <input *ngIf=\"validateEvent()\"\r\n         class=\"submit\" type=\"button\" value=\"Add Event\" (click)=\"addEvent()\">\r\n\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/eventManager/eventManager.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventManager/eventManager.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventManagerEventManagerHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Main</title>\r\n  <style>\r\n    .events td {\r\n      width: 123px;\r\n    }\r\n    .money td {\r\n      width: 465px;\r\n    }\r\n    .attend {\r\n      height: 3em;\r\n      width: 8em;\r\n    }\r\n    td {\r\n      padding: 0 20px;\r\n    }\r\n    tr {\r\n      outline: thin solid lightsalmon;\r\n      height: 5em;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n<br><br>\r\n<table class=\"events\">\r\n  <tr *ngFor=\"let event of events\">\r\n    <td><b>Date: </b>{{event?.date}} <br> <b>Time: </b>{{event?.time}}</td>\r\n    <td>{{event?.name}}</td>\r\n    <td style=\"width: 15em;\">{{event?.description}}</td>\r\n    <td><input type=\"button\" class=\"attend\" id=\"{{event.name.concat('@view')}}\"\r\n               (click)=\"viewAttendees(event?.name)\" value=\"View Attendees\"></td>\r\n    <td><input type=\"button\" class=\"attend\" id=\"{{event.name.concat('@delete')}}\"\r\n               (click)=\"delete(event?.name)\" value=\"Delete\"></td>\r\n  </tr>\r\n</table>\r\n\r\n<input type=\"button\" class=\"attend\" (click)=\"makeEvent()\" value=\"Create an Event\">\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.html":
  /*!************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.html ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForumForumHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Forum</title>\r\n    <style>\r\n        p, div, table {\r\n        margin-left: 20px;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n<p>This is the forum page!</p>\r\n\r\n<table >\r\n\r\n    <tr *ngFor=\"let message of _messagesArray\">\r\n        <td style=\"font-size:9px\">\r\n            {{message.date | date:'shortTime' }}\r\n        </td>\r\n        <td style=\"color:orange\">\r\n            [{{message.author}}]\r\n        </td>\r\n        <td style=\"color:white\">\r\n            {{message.content}}\r\n        </td>\r\n    </tr>\r\n\r\n</table>\r\n\r\n<div>\r\n    <table>\r\n        <td><input mdbInput type=\"text\" name=\"content\" [(ngModel)]=\"_content\" required></td>\r\n        <input type=\"submit\" value=\"Post Message\" (click)=\"createMessage();clearMessage()\">\r\n    </table>\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-item-form/game-item-form.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-item-form/game-item-form.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameItemFormGameItemFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf = \"showForm\" class=\"container row mr-0 bottomRight\">\r\n    <form class=\"form-group row\"\r\n          [formGroup]=\"form\"\r\n          (ngSubmit)=\"onSubmit(form.value)\">\r\n        <h2 class=\"col-12\">Game Items</h2>\r\n\r\n        <div class=\"form-group row mb-0 col-12\">\r\n            <label class=\"col-form-label col-sm-12\" for=\"gameTitle\">Game Title</label>\r\n            <div class=\"col-sm-12\">\r\n                <select class = \"form-control-sm\" name=\"gameTitle\" id=\"gameTitle\" formControlName=\"gameTitle\">\r\n                    <option *ngFor=\"let gameTitle of lookupLists.gameTitles\" [value]=\"gameTitle\">{{ gameTitle }}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row mb-0 col-12\">\r\n            <label class=\"form-control-label col-form-label col-sm-12\" for=\"itemName\">Item Name</label>\r\n            <div class=\"col-sm-12\">\r\n                <input class=\"form-control col-6\" type=\"text\" name=\"itemName\" placeholder=\"Item Name\" id=\"itemName\" formControlName=\"itemName\">\r\n                <div *ngIf=\"form.get('itemName').hasError('pattern')\" class=\"invalid\">\r\n                    Item Name has Invalid Character(s). Please remove special characters\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row mb-0 col-12\">\r\n            <label class=\"form-control-label col-form-label col-sm-12\" for=\"price\">Price</label>\r\n            <div class=\"col-sm-12\">\r\n                <input class=\"form-control col-6\" type=\"text\" name=\"price\" placeholder=\"$\" id=\"price\" formControlName=\"price\">\r\n                <div *ngIf=\"form.get('price').hasError('pattern')\" class=\"invalid\">\r\n                    Price must be numbers.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row mb-0 col-12\">\r\n            <label class=\"form-control-label col-form-label col-sm-12\" for=\"gameImg\">Upload Image</label>\r\n            <div class=\"col-sm-12\">\r\n                <input type=\"file\" name=\"gameImg\" id=\"gameImg\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row mb-0 col-12\">\r\n            <label class=\"form-control-label col-form-label col-sm-12\" for=\"description\">Description</label>\r\n            <div class=\"col-sm-12\">\r\n                <textarea class=\"form-control col-12\" name=\"description\" placeholder=\"Description\" id=\"description\" rows=\"3\" formControlName=\"description\"></textarea>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row col-12 mt-2\">\r\n            <div class=\"col-sm-12\">\r\n                <button class=\"btn btn-primary\" type=\"submit\"\r\n                        [disabled]=\"!form.valid\">Submit</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-item-list/game-item-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-item-list/game-item-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameItemListGameItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>game-item-list works!</p>\r\n\r\n<div class= \"container\">\r\n    <div class=\"row justify-content-center justify-content-sm-start\">\r\n        <app-game-item\r\n                *ngFor=\"let gameItem of gameItems\"\r\n                [gameItem]=\"gameItem\"\r\n                class=\"col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 item\"></app-game-item>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game-item/game-item.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-item/game-item.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameItemGameItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section [gameSold]=\"gameItem.isSold\"\r\n         class=\"card item-body mb-2\">\r\n    <div [gameSold]=\"gameItem.isSold\" class=\"sold\">SOLD</div>\r\n    <div class = \"card-body pb-0\">\r\n        <img class=\"card-img img-fluid rounded-border w-80 h-50\" src=\"{{gameItem.imgSrc}}\" alt=\"item\">\r\n        <h4 class= \"card-header px-0\">{{gameItem.name}}</h4>\r\n        <!--<p class=\"card-text text-truncate\">{{gameItem.description}}</p>-->\r\n    </div>\r\n    <ul  class=\"list-group list-group-flush list-body\">\r\n        <li [gameSold]=\"gameItem.isSold\" class=\"list-group-item\">Game Title: {{gameItem.gameTitle}}</li>\r\n        <li [gameSold]=\"gameItem.isSold\" class=\"list-group-item\">Description: {{gameItem.description }}</li>\r\n        <li [gameSold]=\"gameItem.isSold\" class=\"list-group-item\">Price: ${{gameItem.price }}</li>\r\n        <li [gameSold]=\"gameItem.isSold\" class=\"list-group-item\">Quantity: {{gameItem.qty}}</li>\r\n        <li [gameSold]=\"gameItem.isSold\" class=\"list-group-item\">Date Posted: {{gameItem.date | date:'mediumDate'}}</li>\r\n    </ul>\r\n\r\n    <div class=\"card-body\">\r\n        <div class=\"btn-group\" aria-label=\"Option\" >\r\n            <button  [disabled]=\"gameItem.isSold == true\" [gameSold]=\"gameItem.isSold\" (click)=\"onBuy()\" class=\"btn btn-info mr-2\">Buy</button>\r\n            <button [disabled]=\"gameItem.isSold == true\" [gameSold]=\"gameItem.isSold\" (click)=\"onDetail()\" class=\"btn btn-info\">Detail</button>\r\n        </div>\r\n        <div class=\"card-footer p-0\">\r\n            <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.html":
  /*!************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.html ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Register</title>\r\n  <style>\r\n    p, div {\r\n    margin-left: 20px;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n<p>Log in here!  If you don't have an account, please register one above! </p>\r\n<div>\r\n  <b>Username: </b>\r\n  <td><input mdbInput type=\"text\" name=\"username\" [(ngModel)]=\"username\" required></td>\r\n  <br>\r\n  <b>Password: </b>\r\n  <td><input mdbInput type=\"text\" name=\"password\" [(ngModel)]=\"password\" required></td>\r\n  <br>\r\n  {{errorMessage}}\r\n  <br>\r\n  <input class=\"submit\" type=\"button\" value=\"Login\" (click)=\"login()\">\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.html":
  /*!**********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.html ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\r\n</head>\r\n\r\n<body>\r\n  <div class=\"dropdown text-center gameList\">\r\n    <button class=\"btn btn-primary w-100 dropdown-toggle\"  type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Search for a game</button>\r\n\r\n    <ul aria-labelledby=\"dropdownMenuButton \" class=\"w-100 m-0 pl-0 dropdown-menu pt-0 pl-4\">\r\n      <li  class=\"dropdown-header  mb-0 p-0\">Online games</li>\r\n      <li  class=\"list-inline breadcrumb-item\" *ngFor=\"let gameTitle of lookupLists.gameTitles\"\r\n          [textContent]=\"gameTitle\">{{ gameTitle }}</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <app-game-item-list [gameItems]=\"gameItems\" ></app-game-item-list>\r\n  <button class= 'bottomRight btn btn-primary' type=\"button\" label=\"Click\" (click)=\"toggleChild()\">Sell Item</button>\r\n  <div>\r\n    <app-game-item-form  [showForm]=\"showForm\" ></app-game-item-form>\r\n  </div>\r\n\r\n\r\n  <table cellpadding=\"5\" *ngFor=\"let product of _productsArray\" >\r\n    <tr>\r\n      <th>Item Name:</th>\r\n      <td>{{product.productName }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Description:</th>\r\n      <td>{{product.description }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Price:</th>\r\n      <td>${{product.price | number : '1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Quantity:</th>\r\n      <td>{{product.qty}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Date Posted:</th>\r\n      <td>{{product.date | date:'longTime'}}</td>\r\n    </tr>\r\n    <br>\r\n  </table>\r\n\r\n<br>\r\n</body>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myEvents/myEvents.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myEvents/myEvents.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyEventsMyEventsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>My Events</title>\r\n  <style>\r\n    .events td {\r\n      width: 123px;\r\n    }\r\n    .money td {\r\n      width: 465px;\r\n    }\r\n    .attend {\r\n      height: 3em;\r\n      width: 8em;\r\n    }\r\n    td {\r\n      padding: 0 20px;\r\n    }\r\n    tr {\r\n      outline: thin solid lightsalmon;\r\n      height: 5em;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n<br><br>\r\n<h1>My Events</h1>\r\n<br>\r\n<table class=\"events\">\r\n  <tr *ngFor=\"let event of myEvents\" >\r\n    <td><b>Date: </b>{{event?.date}} <br> <b>Time: </b>{{event?.time}}</td>\r\n    <td>{{event?.name}}</td>\r\n    <td style=\"width: 15em;\">{{event?.description}}</td>\r\n    <td><input type=\"button\" class=\"attend\" id=\"{{event.name}}\"\r\n               (click)=\"attendEvent(event)\" value=\"{{checkAttending(event)}}\"></td>\r\n  </tr>\r\n</table>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Register</title>\r\n</head>\r\n<body>\r\n    <p>product works!</p>\r\n    <app-game-item-form></app-game-item-form>\r\n    <app-game-item-list></app-game-item-list>\r\n</body>\r\n</html>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Register</title>\r\n  <style>\r\n    p, div {\r\n    margin-left: 20px;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n<p>Register a new user below.</p>\r\n<div>\r\n  <b>Username: </b>\r\n  <td><input mdbInput type=\"text\" name=\"username\" [(ngModel)]=\"username\" required></td>\r\n  <br>\r\n  <b>Email: </b>\r\n  <td><input mdbInput type=\"text\" name=\"email\" [(ngModel)]=\"email\" required></td>\r\n  <br>\r\n  <b>First Name: </b>\r\n  <td><input mdbInput type=\"text\" name=\"firstName\" [(ngModel)]=\"firstName\" required></td>\r\n  <br>\r\n  <b>Last Name: </b>\r\n  <td><input mdbInput type=\"text\" name=\"lastName\" [(ngModel)]=\"lastName\" required></td>\r\n  <br>\r\n  <b>Password: </b>\r\n  <td><input mdbInput type=\"text\" name=\"password\" [(ngModel)]=\"password\" required></td>\r\n  <br>\r\n  <b>Confirm Password: </b>\r\n  <td><input mdbInput type=\"text\" name=\"passConf\" [(ngModel)]=\"passConf\" required></td>\r\n  <br>\r\n  {{errorMessage}}\r\n  <br>\r\n  <b>Is this an Admin User?</b>\r\n  <input mbdInput type=\"checkbox\" name=\"admin\" [(ngModel)]=\"admin\">\r\n  <br>\r\n  <br>\r\n  <input *ngIf=\"validateUser()\"\r\n         class=\"submit\" type=\"button\" value=\"Add User\" (click)=\"addUser()\">\r\n\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/viewAttendees/viewAttendees.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewAttendees/viewAttendees.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewAttendeesViewAttendeesHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>View Attendees</title>\r\n</head>\r\n<body>\r\n<br>\r\n<b> {{event?.date}} | {{event?.time}} | {{event?.name}} </b>\r\n<br>\r\n<p *ngIf=\"event?.attendees == []\"> Nobody is attending this event. :( </p>\r\n<p *ngFor=\"let guy of event?.attendees\">{{guy}}</p>\r\n\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/ApiService.ts":
  /*!*******************************!*\
    !*** ./src/app/ApiService.ts ***!
    \*******************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, that) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.site = 'http://localhost:1337/'; // Pointer to component using ApiService.

        this._that = that;
      } //------------------------------------------------------------
      // Creates request header with Jwt Bearer token.
      //------------------------------------------------------------


      _createClass(ApiService, [{
        key: "getSecureHeader",
        value: function getSecureHeader() {
          var token = sessionStorage.getItem('auth_token'); // To access data from the server while authenticated the
          // token must be included in the request.

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.append('Authorization', 'Bearer ' + token);
          return headers;
        } //------------------------------------------------------------
        // Implements GET request and sends data back to component
        // through callback.
        //------------------------------------------------------------

      }, {
        key: "getData",
        value: function getData(route, callback) {
          var _this2 = this;

          var url = this.site + route;
          var headers = this.getSecureHeader();
          this.http.get(url, {
            headers: headers
          }) // Get data and wait for result.
          .subscribe(function (result) {
            //   result.errorMessage = "";
            callback(result, _this2._that);
          }, function (error) {
            callback({
              errorMessage: JSON.stringify(error)
            }, _this2._that);
          });
        } //------------------------------------------------------------
        // Implements POST request and sends data back to component
        // through callback.
        //------------------------------------------------------------

      }, {
        key: "postData",
        value: function postData(route, obj, callback) {
          var _this3 = this;

          var headers = this.getSecureHeader(); // This free online service receives post submissions.

          this.http.post(this.site + route, {
            obj: obj
          }, {
            headers: headers
          }).subscribe( // Data is received from the post request.
          function (data) {
            // Inspect the data to know how to parse it.
            console.log("POST call successful. Inspect response.", JSON.stringify(data));
            data['errorMessage'] = "";
            callback(data, _this3._that);
          }, // An error occurred. Data is not received. 
          function (error) {
            callback({
              errorMessage: JSON.stringify(error)
            }, _this3._that);
          });
        }
      }, {
        key: "putEventAttendees",
        value: function putEventAttendees(event, user, callback) {
          var _this4 = this;

          this.http.put('//localhost:1337/Event/AddAttendee', {
            event: event,
            username: user
          }).subscribe(function (data) {
            callback(data, _this4._that);
          }, function (error) {
            callback({
              errorMessage: JSON.stringify(error)
            }, _this4._that);
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser(callback) {
          var kickout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          // Logged in if token exists in browser cache.
          if (sessionStorage.getItem('auth_token') != null) {
            this.getData('User/SecureAreaJwt', callback);
          } else if (kickout) {
            window.location.href = 'http://localhost:4200/login';
            window.alert('Please log in.');
          }
        }
      }]);

      return ApiService;
    }();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ApiService */
    "./src/app/ApiService.ts"); // @ts-ignore
    // @ts-ignore


    var AppComponent = /*#__PURE__*/function () {
      // Since we are using a provider above we can receive
      // an instance through an constructor.
      function AppComponent(http) {
        _classCallCheck(this, AppComponent);

        this.http = http; // Hard-code credentials for convenience.

        this.admin = false;
        this.username = '';
        this.test = '';
        this.token = '';
        this.message = 'Not logged in.';
        this.secureData = '';
        this.reqInfo = null;
        this.site = 'http://localhost:1337/'; // Pass in http module and pointer to AppComponent.

        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
        this.showContentIfLoggedIn();
      } //------------------------------------------------------------
      // Either shows content when logged in or clears contents.
      //------------------------------------------------------------


      _createClass(AppComponent, [{
        key: "showContentIfLoggedIn",
        value: function showContentIfLoggedIn() {
          // Logged in if token exists in browser cache.
          if (sessionStorage.getItem('auth_token') != null) {
            this.token = sessionStorage.getItem('auth_token');
            this.message = "The user has been logged in.";
            this.getSecureData();
          } else {
            this.message = "Not logged in.";
            this.token = '';
          }
        }
      }, {
        key: "getSecureData",
        value: function getSecureData() {
          this._apiService.getData('User/SecureAreaJwt', this.secureDataCallback);
        } // Callback needs a pointer '_this' to current instance.

      }, {
        key: "secureDataCallback",
        value: function secureDataCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.secureData = result.secureData;
            _this.reqInfo = result.reqInfo;
            _this.username = result.reqInfo.username;

            if (result.reqInfo.roles.indexOf('Admin') >= 0) {
              _this.admin = true;
            }
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        } //------------------------------------------------------------
        // Log user out. Destroy token.
        //------------------------------------------------------------

      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.clear();
          this.showContentIfLoggedIn(); // Clear data.

          this.secureData = "";
          this.reqInfo = {};
          this.username = '';
          this.admin = false; // Redirect home and reload that page (sorry for using this easy abd dirty way)

          window.location.href = 'http://localhost:4200/main';
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: "\n    <h1> Gold Gamer Experience </h1>\n    <h3> A destination for gaming commodities and communities. </h3>\n    <nav>\n      <a routerLink=\"/main\" routerLinkActive=\"active\">Main</a> |\n      <a routerLink=\"/forum\" routerLinkActive=\"active\">Forum</a> |\n      <a routerLink=\"/product\" routerLinkActive=\"active\">Game Item</a>\n      <span *ngIf=\"message == 'Not logged in.'\"> | <a routerLink=\"/register\" routerLinkActive=\"active\">Register</a> </span>\n      <span *ngIf=\"message == 'Not logged in.'\"> | <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a> </span>\n      <span *ngIf=\"admin\"> | <a routerLink=\"/eventManager\" routerLinkActive=\"active\">Event Manager</a> </span>\n      <span *ngIf=\"message == 'The user has been logged in.'\"> | <a routerLink=\"/myEvents\" routerLinkActive=\"active\">My events</a> </span>\n      <span *ngIf=\"message == 'The user has been logged in.'\"> | <a routerLink=\"/main\" routerLinkActive=\"active\" (click)=\"logout()\">Logout ({{username}})</a> </span>\n    </nav>\n    <br>\n    <!-- Where router should display a view -->\n    <router-outlet></router-outlet>",
      styles: ["h1, h3, nav { margin-left: 20px; }"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_app_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/app.main */
    "./src/app/main/app.main.ts");
    /* harmony import */


    var _login_app_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/app.login */
    "./src/app/login/app.login.ts");
    /* harmony import */


    var _register_app_register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/app.register */
    "./src/app/register/app.register.ts");
    /* harmony import */


    var _myEvents_app_myEvents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./myEvents/app.myEvents */
    "./src/app/myEvents/app.myEvents.ts");
    /* harmony import */


    var _createEvent_app_createEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./createEvent/app.createEvent */
    "./src/app/createEvent/app.createEvent.ts");
    /* harmony import */


    var _eventManager_app_eventManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./eventManager/app.eventManager */
    "./src/app/eventManager/app.eventManager.ts");
    /* harmony import */


    var _viewAttendees_app_viewAttendees__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./viewAttendees/app.viewAttendees */
    "./src/app/viewAttendees/app.viewAttendees.ts");
    /* harmony import */


    var _forum_app_forum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./forum/app.forum */
    "./src/app/forum/app.forum.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _game_item_game_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./game-item/game-item.component */
    "./src/app/game-item/game-item.component.ts");
    /* harmony import */


    var _game_item_form_game_item_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./game-item-form/game-item-form.component */
    "./src/app/game-item-form/game-item-form.component.ts");
    /* harmony import */


    var _game_item_list_game_item_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./game-item-list/game-item-list.component */
    "./src/app/game-item-list/game-item-list.component.ts");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./providers */
    "./src/app/providers.ts");
    /* harmony import */


    var _sold_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./sold.directive */
    "./src/app/sold.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _main_app_main__WEBPACK_IMPORTED_MODULE_7__["Main"], _login_app_login__WEBPACK_IMPORTED_MODULE_8__["Login"], _register_app_register__WEBPACK_IMPORTED_MODULE_9__["Register"], _myEvents_app_myEvents__WEBPACK_IMPORTED_MODULE_10__["MyEvents"], _createEvent_app_createEvent__WEBPACK_IMPORTED_MODULE_11__["CreateEvent"], _eventManager_app_eventManager__WEBPACK_IMPORTED_MODULE_12__["EventManager"], _viewAttendees_app_viewAttendees__WEBPACK_IMPORTED_MODULE_13__["ViewAttendees"], _forum_app_forum__WEBPACK_IMPORTED_MODULE_14__["Forum"], _product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"], _game_item_game_item_component__WEBPACK_IMPORTED_MODULE_16__["GameItemComponent"], _game_item_form_game_item_form_component__WEBPACK_IMPORTED_MODULE_17__["GameItemFormComponent"], _game_item_list_game_item_list_component__WEBPACK_IMPORTED_MODULE_18__["GameItemListComponent"], _sold_directive__WEBPACK_IMPORTED_MODULE_20__["SoldDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [{
        provide: _providers__WEBPACK_IMPORTED_MODULE_19__["lookupGameList"],
        useValue: _providers__WEBPACK_IMPORTED_MODULE_19__["lookForGames"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_app_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/app.main */
    "./src/app/main/app.main.ts");
    /* harmony import */


    var _myEvents_app_myEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myEvents/app.myEvents */
    "./src/app/myEvents/app.myEvents.ts");
    /* harmony import */


    var _register_app_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/app.register */
    "./src/app/register/app.register.ts");
    /* harmony import */


    var _login_app_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/app.login */
    "./src/app/login/app.login.ts");
    /* harmony import */


    var _createEvent_app_createEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createEvent/app.createEvent */
    "./src/app/createEvent/app.createEvent.ts");
    /* harmony import */


    var _eventManager_app_eventManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./eventManager/app.eventManager */
    "./src/app/eventManager/app.eventManager.ts");
    /* harmony import */


    var _viewAttendees_app_viewAttendees__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./viewAttendees/app.viewAttendees */
    "./src/app/viewAttendees/app.viewAttendees.ts");
    /* harmony import */


    var _forum_app_forum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forum/app.forum */
    "./src/app/forum/app.forum.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");

    var appRoutes = [//MAIN PAGES
    {
      path: 'main',
      component: _main_app_main__WEBPACK_IMPORTED_MODULE_2__["Main"]
    }, {
      path: 'myEvents',
      component: _myEvents_app_myEvents__WEBPACK_IMPORTED_MODULE_3__["MyEvents"]
    }, {
      path: 'register',
      component: _register_app_register__WEBPACK_IMPORTED_MODULE_4__["Register"]
    }, {
      path: 'login',
      component: _login_app_login__WEBPACK_IMPORTED_MODULE_5__["Login"]
    }, {
      path: 'createEvent',
      component: _createEvent_app_createEvent__WEBPACK_IMPORTED_MODULE_6__["CreateEvent"]
    }, {
      path: 'eventManager',
      component: _eventManager_app_eventManager__WEBPACK_IMPORTED_MODULE_7__["EventManager"]
    }, {
      path: 'viewAttendees/:event',
      component: _viewAttendees_app_viewAttendees__WEBPACK_IMPORTED_MODULE_8__["ViewAttendees"]
    }, {
      path: 'forum',
      component: _forum_app_forum__WEBPACK_IMPORTED_MODULE_9__["Forum"]
    }, {
      path: 'product',
      component: _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"]
    }, //REDIRECT PATHS
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _main_app_main__WEBPACK_IMPORTED_MODULE_2__["Main"]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/createEvent/app.createEvent.ts":
  /*!************************************************!*\
    !*** ./src/app/createEvent/app.createEvent.ts ***!
    \************************************************/

  /*! exports provided: CreateEvent */

  /***/
  function srcAppCreateEventAppCreateEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEvent", function () {
      return CreateEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ApiService */
    "./src/app/ApiService.ts");

    var CreateEvent = /*#__PURE__*/function () {
      function CreateEvent(http) {
        _classCallCheck(this, CreateEvent);

        this.http = http;
        this.name = '';
        this.description = '';
        this.date = '';
        this.time = '';
        this.errorMessage = '';
        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
        this.loadUser();
      }

      _createClass(CreateEvent, [{
        key: "loadUser",
        value: function loadUser() {
          this._apiService.loadUser(this.loadUserCallback, true);
        }
      }, {
        key: "loadUserCallback",
        value: function loadUserCallback(result, _this) {
          if (result.errorMessage == "") {
            if (result.reqInfo.roles.indexOf('Admin') < 0) {
              window.location.href = 'http://localhost:4200/main';
              window.alert("Hey!  You're not an Admin! Get out of here!");
            } else {
              _this.loadEvents();
            }
          }
        }
      }, {
        key: "validateEvent",
        value: function validateEvent() {
          var evnList = [this.name, this.description, this.date, this.time];

          for (var i = 0; i < evnList.length; i++) {
            if (evnList[i] == '') {
              return false;
            }
          }

          for (var _i = 0; _i < this.events.length; _i++) {
            var currEvn = this.events[_i];

            if (currEvn == this.name) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "getDate",
        value: function getDate(input) {
          //returns 2020 Feb 20
          var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          return months[input.substring(5, 6)] + input.substring(7, 10);
        }
      }, {
        key: "getTime",
        value: function getTime(input) {
          //returns 6:00PM
          var hour = parseInt(input.substring(0, 2));
          var min = parseInt(input.substring(3, 5));
          var suffix = 'AM';

          if (hour > 12) {
            hour -= 12;
            suffix = 'PM';
          }

          if (min < 10) {
            var minut = '0' + min.toString();
          } else {
            var minut = min.toString();
          }

          return hour.toString() + ':' + minut + suffix;
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          var _this5 = this;

          console.log(this.getDate(this.date));
          this.http.post('http://localhost:1337/Event/CreateEvent', {
            name: this.name,
            date: this.getDate(this.date),
            time: this.getTime(this.time),
            description: this.description
          }).subscribe(function (data) {
            console.log("POST call successful. Inspect response.", JSON.stringify(data));
            _this5.errorMessage = data["errorMessage"];

            if (_this5.errorMessage == '') {
              window.location.href = 'http://localhost:4200/eventManager';
            }
          }, function (error) {
            _this5.errorMessage = error;
          });
        }
      }, {
        key: "loadEvents",
        value: function loadEvents() {
          this._apiService.getData('Event/GetEvents', this.eventCallback);
        } // Callback needs a pointer '_this' to current instance.

      }, {
        key: "eventCallback",
        value: function eventCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.events = result.events;
            console.log(_this.events.keys());
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        }
      }]);

      return CreateEvent;
    }();

    CreateEvent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CreateEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createEvent.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createEvent/createEvent.html"))["default"]
    })], CreateEvent);
    /***/
  },

  /***/
  "./src/app/eventManager/app.eventManager.ts":
  /*!**************************************************!*\
    !*** ./src/app/eventManager/app.eventManager.ts ***!
    \**************************************************/

  /*! exports provided: EventManager */

  /***/
  function srcAppEventManagerAppEventManagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventManager", function () {
      return EventManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ApiService */
    "./src/app/ApiService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var URL = 'http://localhost:1337/';

    var EventManager = /*#__PURE__*/function () {
      function EventManager(http, router) {
        _classCallCheck(this, EventManager);

        this.http = http;
        this.router = router;
        this.username = '';
        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
        this.loadUser();
      }

      _createClass(EventManager, [{
        key: "delete",
        value: function _delete(name) {
          var _this6 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            "body": {
              name: name
            }
          };
          var url = URL + 'Event/Delete';
          this.http["delete"](url, httpOptions).subscribe(function (data) {
            _this6.loadEvents();
          });
        }
      }, {
        key: "viewAttendees",
        value: function viewAttendees(event) {
          this.router.navigate(["/viewAttendees", event]);
        }
      }, {
        key: "makeEvent",
        value: function makeEvent() {
          this.router.navigate(["/createEvent"]);
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          this._apiService.loadUser(this.loadUserCallback, true);
        }
      }, {
        key: "loadUserCallback",
        value: function loadUserCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.username = result.reqInfo.username;

            if (result.reqInfo.roles.indexOf('Admin') < 0) {
              window.location.href = 'http://localhost:4200/main';
              window.alert("Hey!  You're not an Admin! Get out of here!");
            } else {
              _this.loadEvents();
            }
          }
        }
      }, {
        key: "loadEvents",
        value: function loadEvents() {
          this._apiService.getData('Event/GetEvents', this.eventCallback);
        } // Callback needs a pointer '_this' to current instance.

      }, {
        key: "eventCallback",
        value: function eventCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.events = result.events;
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        }
      }]);

      return EventManager;
    }();

    EventManager.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    EventManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eventManager.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/eventManager/eventManager.html"))["default"]
    })], EventManager);
    /***/
  },

  /***/
  "./src/app/forum/app.forum.ts":
  /*!************************************!*\
    !*** ./src/app/forum/app.forum.ts ***!
    \************************************/

  /*! exports provided: Forum */

  /***/
  function srcAppForumAppForumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Forum", function () {
      return Forum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ApiService */
    "./src/app/ApiService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BASE_URL = "http://localhost:1337/Message/";

    var Forum = /*#__PURE__*/function () {
      function Forum(http, router) {
        _classCallCheck(this, Forum);

        this.http = http;
        this.router = router;
        this._errorMessage = "";
        this._message = "";
        this._authorName = "";
        this._content = "";
        this.admin = false;
        this.username = '';
        this.test = '';
        this.token = '';
        this.message = 'Not logged in.';
        this.secureData = '';
        this.reqInfo = null;
        this.site = 'http://localhost:1337/';
        this._http = http;
        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
        this.showContentIfLoggedIn();
        this.getAllMessages();
      }

      _createClass(Forum, [{
        key: "showContentIfLoggedIn",
        value: function showContentIfLoggedIn() {
          // Logged in if token exists in browser cache.
          if (sessionStorage.getItem('auth_token') != null) {
            this.token = sessionStorage.getItem('auth_token');
            this.message = "The user has been logged in.";
            this.getSecureData();
          } else {
            this.message = "Not logged in.";
            this.token = '';
          }
        }
      }, {
        key: "getSecureData",
        value: function getSecureData() {
          this._apiService.getData('User/SecureAreaJwt', this.secureDataCallback);
        } // Callback needs a pointer '_this' to current instance.

      }, {
        key: "secureDataCallback",
        value: function secureDataCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.secureData = result.secureData;
            _this.reqInfo = result.reqInfo;
            _this.username = result.reqInfo.username;

            if (result.reqInfo.roles.indexOf('Admin') >= 0) {
              _this.admin = true;
            }
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        }
      }, {
        key: "getAllMessages",
        value: function getAllMessages() {
          var _this7 = this;

          var url = BASE_URL + 'GetMessages';

          this._http.get(url) // Get data and wait for result.
          .subscribe(function (result) {
            _this7._messagesArray = result.messages;
          }, function (error) {
            // Let user know about the error.
            _this7._errorMessage = error;
          });
        }
      }, {
        key: "createMessage",
        value: function createMessage() {
          var _this8 = this;

          // This free online service receives post submissions.
          this.http.post(BASE_URL + "CreateMessage", {
            //_id:            this._id,
            author: this.username,
            content: this._content,
            date: Date.now() //replies:
            //reply:

          }).subscribe( // Data is received from the post request.
          function (data) {
            // Inspect the data to know how to parse it.
            console.log("POST call successful. Inspect response.", JSON.stringify(data));

            if (data["errorMessage"] == "") {
              _this8._message = "Message added!";
              _this8._errorMessage = "";
            } else {
              _this8._errorMessage = "Failed to add message.";
              _this8._message = "";
            } // this._errorMessage = data["errorMessage"];


            _this8.getAllMessages();
          }, // An error occurred. Data is not received.
          function (error) {
            _this8._errorMessage = error;
          });
        }
      }, {
        key: "clearMessage",
        value: function clearMessage() {
          this._content = "";
        }
      }]);

      return Forum;
    }();

    Forum.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    Forum = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forum.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.html"))["default"]
    })], Forum);
    /***/
  },

  /***/
  "./src/app/game-item-form/game-item-form.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/game-item-form/game-item-form.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameItemFormGameItemFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bottomRight {\r\n    position: fixed;\r\n    bottom: 7%;\r\n    right: 50px;\r\n    border: 3px solid #73AD21;\r\n    background-color: greenyellow;\r\n    width: 300px;\r\n}\r\n\r\ninput.ng-invalid:not(.ng-pristine) {\r\n    border: 3px solid #d93a3e;\r\n}\r\n\r\n.invalid{\r\n    color: #d93a3e;\r\n}\r\n\r\nbutton[type=submit]:disabled {\r\n    background-color: #333;\r\n    color: #666;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1pdGVtLWZvcm0vZ2FtZS1pdGVtLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1pdGVtLWZvcm0vZ2FtZS1pdGVtLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b21SaWdodCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDclO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNzNBRDIxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQ6bm90KC5uZy1wcmlzdGluZSkge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Q5M2EzZTtcclxufVxyXG5cclxuLmludmFsaWR7XHJcbiAgICBjb2xvcjogI2Q5M2EzZTtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/game-item-form/game-item-form.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/game-item-form/game-item-form.component.ts ***!
    \************************************************************/

  /*! exports provided: GameItemFormComponent */

  /***/
  function srcAppGameItemFormGameItemFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameItemFormComponent", function () {
      return GameItemFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _game_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game-item.service */
    "./src/app/game-item.service.ts");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../providers */
    "./src/app/providers.ts");

    var GameItemFormComponent = /*#__PURE__*/function () {
      function GameItemFormComponent(FormBuilder, gameItemComponent, lookupLists) {
        _classCallCheck(this, GameItemFormComponent);

        this.FormBuilder = FormBuilder;
        this.gameItemComponent = gameItemComponent;
        this.lookupLists = lookupLists;
      }

      _createClass(GameItemFormComponent, [{
        key: "onSubmit",
        value: function onSubmit(gameItem) {
          gameItem["datePosted"] = Date.now();
          console.log(gameItem);
          this.gameItemComponent.add(gameItem);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.FormBuilder.group({
            gameTitle: this.FormBuilder.control('Maple Story'),
            itemName: this.FormBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[\\w\\-\\s\\/]+')])),
            price: this.FormBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')])),
            description: this.FormBuilder.control("")
          });
        }
      }]);

      return GameItemFormComponent;
    }();

    GameItemFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _game_item_service__WEBPACK_IMPORTED_MODULE_3__["GameItemService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_providers__WEBPACK_IMPORTED_MODULE_4__["lookupGameList"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameItemFormComponent.prototype, "showForm", void 0);
    GameItemFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-item-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-item-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-item-form/game-item-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-item-form.component.css */
      "./src/app/game-item-form/game-item-form.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_providers__WEBPACK_IMPORTED_MODULE_4__["lookupGameList"]))], GameItemFormComponent);
    /***/
  },

  /***/
  "./src/app/game-item-list/game-item-list.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/game-item-list/game-item-list.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameItemListGameItemListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item {\r\n    height: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1pdGVtLWxpc3QvZ2FtZS1pdGVtLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtaXRlbS1saXN0L2dhbWUtaXRlbS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/game-item-list/game-item-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/game-item-list/game-item-list.component.ts ***!
    \************************************************************/

  /*! exports provided: GameItemListComponent */

  /***/
  function srcAppGameItemListGameItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameItemListComponent", function () {
      return GameItemListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game-item.service */
    "./src/app/game-item.service.ts");

    var GameItemListComponent = /*#__PURE__*/function () {
      function GameItemListComponent(gameItemService) {
        _classCallCheck(this, GameItemListComponent);

        this.gameItemService = gameItemService;
      }

      _createClass(GameItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.gameItems = this.gameItemService.get();
        }
      }]);

      return GameItemListComponent;
    }();

    GameItemListComponent.ctorParameters = function () {
      return [{
        type: _game_item_service__WEBPACK_IMPORTED_MODULE_2__["GameItemService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameItemListComponent.prototype, "gameItems", void 0);
    GameItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-item-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-item-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-item-list/game-item-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-item-list.component.css */
      "./src/app/game-item-list/game-item-list.component.css"))["default"]]
    })], GameItemListComponent);
    /***/
  },

  /***/
  "./src/app/game-item.service.ts":
  /*!**************************************!*\
    !*** ./src/app/game-item.service.ts ***!
    \**************************************/

  /*! exports provided: GameItemService */

  /***/
  function srcAppGameItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameItemService", function () {
      return GameItemService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GameItemService = /*#__PURE__*/function () {
      function GameItemService() {
        _classCallCheck(this, GameItemService);

        this.gameItems = [{
          _id: 1,
          name: "Echoing fury",
          description: "Only 14,000 US Dollar for Echoing fury one time chance only",
          imgSrc: "assets/img/fury.PNG",
          gameTitle: "Diablo2",
          price: "14,000",
          datePosted: "01/04/2015",
          isSold: false
        }, {
          _id: 2,
          name: "mace",
          description: "this item is sososososososo good!!!!",
          imgSrc: "",
          gameTitle: "Maplestory",
          price: "1",
          datePosted: "01/04/2015",
          isSold: true
        }, {
          _id: 3,
          name: "spear",
          description: "This is an epic item !!!!!!!!!!!!!!!!!!!!!!!!!!",
          imgSrc: "",
          gameTitle: "World of Warcraft",
          price: "15",
          datePosted: "01/04/2015",
          isSold: false
        }, {
          _id: 4,
          name: "Echoing fury",
          description: "Only 14,000 US Dollar for Echoing fury one time chance only",
          imgSrc: "assets/img/fury.PNG",
          title: "Diablo2",
          price: "14,000",
          datePosted: "01/04/2015",
          isSold: false
        }];
      }

      _createClass(GameItemService, [{
        key: "get",
        value: function get() {
          return this.gameItems;
        }
      }, {
        key: "add",
        value: function add(gameItem) {
          this.gameItems.push(gameItem);
        }
      }]);

      return GameItemService;
    }();

    GameItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GameItemService);
    /***/
  },

  /***/
  "./src/app/game-item/game-item.component.css":
  /*!***************************************************!*\
    !*** ./src/app/game-item/game-item.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameItemGameItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.item-body{\r\n    background-color:  #29394b !important;\r\n    color: #53ace4 !important;\r\n    border-color: #53ace4 !important ;\r\n    border: 2px solid;\r\n}\r\n\r\nli{\r\n    background-color:  #29394b;\r\n    border-color: #53ace4;\r\n}\r\n\r\n.item-body.is-sold {\r\n    border-color: black;\r\n    color: grey;\r\n    border: 2px solid;\r\n}\r\n\r\nli.is-sold{\r\n    border-color: black;\r\n}\r\n\r\nbutton.is-sold{\r\n    background-color:  grey;\r\n    border-color: grey;\r\n}\r\n\r\n.sold{\r\n    display: none;\r\n}\r\n\r\nsection:hover > .sold.is-sold {\r\n    display: block;\r\n    color: red;\r\n    font-size: 2em;\r\n    position: absolute;\r\n    left:0;\r\n    top: 5%;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\nsection.is-sold.is-sold-hovering{\r\n    border-color: red;\r\n    display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1pdGVtL2dhbWUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1pdGVtL2dhbWUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pdGVtLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzI5Mzk0YiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1M2FjZTQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzUzYWNlNCAhaW1wb3J0YW50IDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG59XHJcblxyXG5saXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMjkzOTRiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTNhY2U0O1xyXG59XHJcblxyXG4uaXRlbS1ib2R5LmlzLXNvbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuXHJcbmxpLmlzLXNvbGR7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5idXR0b24uaXMtc29sZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICBncmV5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uc29sZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbnNlY3Rpb246aG92ZXIgPiAuc29sZC5pcy1zb2xkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uLmlzLXNvbGQuaXMtc29sZC1ob3ZlcmluZ3tcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/game-item/game-item.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/game-item/game-item.component.ts ***!
    \**************************************************/

  /*! exports provided: GameItemComponent */

  /***/
  function srcAppGameItemGameItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameItemComponent", function () {
      return GameItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GameItemComponent = /*#__PURE__*/function () {
      function GameItemComponent() {
        _classCallCheck(this, GameItemComponent);

        this.buy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detail = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GameItemComponent, [{
        key: "onBuy",
        value: function onBuy() {
          console.log("buy");
          this.buy.emit(this.gameItem);
        }
      }, {
        key: "onDetail",
        value: function onDetail() {
          console.log("detail");
          this.detail.emit(this.gameItem);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GameItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameItemComponent.prototype, "gameItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameItemComponent.prototype, "buy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameItemComponent.prototype, "detail", void 0);
    GameItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game-item/game-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-item.component.css */
      "./src/app/game-item/game-item.component.css"))["default"]]
    })], GameItemComponent);
    /***/
  },

  /***/
  "./src/app/login/app.login.ts":
  /*!************************************!*\
    !*** ./src/app/login/app.login.ts ***!
    \************************************/

  /*! exports provided: Login */

  /***/
  function srcAppLoginAppLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var Login = /*#__PURE__*/function () {
      function Login(http) {
        _classCallCheck(this, Login);

        this.http = http;
        this.username = '';
        this.password = '';
        this.errorMessage = '';
      }

      _createClass(Login, [{
        key: "login",
        value: function login() {
          var _this9 = this;

          var url = "http://localhost:1337/auth"; // This free online service receives post submissions.

          this.http.post(url, {
            username: this.username,
            password: this.password
          }).subscribe( // Data is received from the post request.
          function (data) {
            // Inspect the data to know how to parse it.
            console.log(JSON.stringify(data));

            if (data["token"] != null) {
              _this9.token = data["token"];
              sessionStorage.setItem('auth_token', data["token"]);
              _this9.message = "The user has been logged in.";
              window.location.href = 'http://localhost:4200/main';
            }
          }, // An error occurred. Data is not received. 
          function (error) {
            _this9.errorMessage = 'Error: wrong username or password.';
          });
        }
      }]);

      return Login;
    }();

    Login.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-child',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.html"))["default"]
    })], Login);
    /***/
  },

  /***/
  "./src/app/main/app.main.ts":
  /*!**********************************!*\
    !*** ./src/app/main/app.main.ts ***!
    \**********************************/

  /*! exports provided: Main */

  /***/
  function srcAppMainAppMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Main", function () {
      return Main;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ApiService */
    "./src/app/ApiService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../providers */
    "./src/app/providers.ts");

    var BASE_URL = "http://localhost:1337/Product/";

    var Main = /*#__PURE__*/function () {
      function Main(http, lookupLists, router) {
        _classCallCheck(this, Main);

        this.http = http;
        this.lookupLists = lookupLists;
        this.router = router;
        this._errorMessage = '';
        this.username = '';
        this._message = "";
        this.datePosted = Date.now();
        this.isSold = true;
        this.showForm = false; // Pass in http module and pointer to AppComponent.

        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
        this._http = http; //this.loadUser();

        this.getAllProducts();
      } // loadUser() {
      //   this._apiService.loadUser(this.loadUserCallback)
      // }
      // loadUserCallback(result, _this) {
      //   if(result.errorMessage == "") {
      //     _this.username = result.reqInfo.username;
      //   }
      // }


      _createClass(Main, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this10 = this;

          var url = BASE_URL + 'Index';

          this._http.get(url) // Get data and wait for result.
          .subscribe(function (result) {
            _this10.gameItems = result.products;
          }, function (error) {
            // Let user know about the error.
            _this10._errorMessage = error;
          });
        }
      }, {
        key: "createProduct",
        value: function createProduct() {
          var _this11 = this;

          // This free online service receives post submissions.
          this.http.post(BASE_URL + "CreateProduct", {
            _id: this._id,
            name: this.name,
            price: this.price,
            description: this.description,
            gameTitle: this.gameTitle,
            imgSrc: this.imgSrc,
            datePosted: this.datePosted,
            isSold: this.isSold
          }).subscribe( // Data is received from the post request.
          function (data) {
            // Inspect the data to know how to parse it.
            console.log("POST call successful. Inspect response.", JSON.stringify(data));

            if (data["errorMessage"] == "") {
              _this11._message = "Menu item added!";
              _this11._errorMessage = "";
            } else {
              _this11._errorMessage = "Failed to add menu item.";
              _this11._message = "";
            } // this._errorMessage = data["errorMessage"];


            _this11.getAllProducts();
          }, // An error occurred. Data is not received.
          function (error) {
            _this11._errorMessage = error;
          });
        }
      }, {
        key: "toggleChild",
        value: function toggleChild() {
          this.showForm = !this.showForm;
        }
      }]);

      return Main;
    }();

    Main.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_providers__WEBPACK_IMPORTED_MODULE_5__["lookupGameList"]]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    Main = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.css */
      "./src/app/main/main.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_providers__WEBPACK_IMPORTED_MODULE_5__["lookupGameList"]))], Main);
    /***/
  },

  /***/
  "./src/app/main/main.css":
  /*!*******************************!*\
    !*** ./src/app/main/main.css ***!
    \*******************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section{\r\n    background-color: gray;\r\n}\r\n\r\n.bottomRight {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    width: 100px;\r\n    border: 3px solid #73AD21;\r\n}\r\n\r\n.list-inline{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5ib3R0b21SaWdodCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XHJcbn1cclxuXHJcbi5saXN0LWlubGluZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/myEvents/app.myEvents.ts":
  /*!******************************************!*\
    !*** ./src/app/myEvents/app.myEvents.ts ***!
    \******************************************/

  /*! exports provided: MyEvents */

  /***/
  function srcAppMyEventsAppMyEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEvents", function () {
      return MyEvents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ApiService */
    "./src/app/ApiService.ts");

    var MyEvents = /*#__PURE__*/function () {
      function MyEvents(http) {
        _classCallCheck(this, MyEvents);

        this.http = http;
        this.username = '';
        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
        this.loadUser();
      }

      _createClass(MyEvents, [{
        key: "loadUser",
        value: function loadUser() {
          this._apiService.loadUser(this.loadUserCallback);
        }
      }, {
        key: "loadUserCallback",
        value: function loadUserCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.username = result.reqInfo.username;

            _this.loadEvents();
          }
        }
      }, {
        key: "loadEvents",
        value: function loadEvents() {
          this._apiService.getData('Event/GetEvents', this.eventCallback);
        }
      }, {
        key: "eventCallback",
        value: function eventCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.events = result.events;
            _this.myEvents = result.events.filter(function (el) {
              return !(el.attendees.indexOf(_this.username) < 0);
            });
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        }
      }, {
        key: "checkAttending",
        value: function checkAttending(event) {
          // checks if the user is attending this event, and generates the value for the button
          if (event.attendees.indexOf(this.username) < 0) {
            return 'Attend';
          } else {
            return 'Stop Attending';
          }
        }
      }, {
        key: "attendEvent",
        value: function attendEvent(event) {
          this._apiService.putEventAttendees(event, this.username, this.attendCallback);
        }
      }, {
        key: "attendCallback",
        value: function attendCallback(result, _this) {
          if (result.errorMessage == "") {
            _this.loadEvents();
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        }
      }]);

      return MyEvents;
    }();

    MyEvents.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MyEvents = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myEvents.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myEvents/myEvents.html"))["default"]
    })], MyEvents);
    /***/
  },

  /***/
  "./src/app/product/product.component.css":
  /*!***********************************************!*\
    !*** ./src/app/product/product.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/product/product.component.css"))["default"]]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/providers.ts":
  /*!******************************!*\
    !*** ./src/app/providers.ts ***!
    \******************************/

  /*! exports provided: lookupGameList, lookForGames */

  /***/
  function srcAppProvidersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lookupGameList", function () {
      return lookupGameList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lookForGames", function () {
      return lookForGames;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var lookupGameList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('lookupGameList');
    var lookForGames = {
      gameTitles: ["Maple Story", "Diablo2", "League of Legends", "Counter-Strike", "Call of Duty", "Minecraft", "PLAYERUNKNOWN'S BATTLEGROUNDS", "Apex Legends", "Grand Theft Auto V", "Dota 2", "Fortnite", "Others"]
    };
    /***/
  },

  /***/
  "./src/app/register/app.register.ts":
  /*!******************************************!*\
    !*** ./src/app/register/app.register.ts ***!
    \******************************************/

  /*! exports provided: Register */

  /***/
  function srcAppRegisterAppRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Register", function () {
      return Register;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); // @ts-ignore
    // @ts-ignore


    var Register = /*#__PURE__*/function () {
      function Register(http) {
        _classCallCheck(this, Register);

        this.http = http;
        this.username = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.passConf = '';
        this.admin = false;
        this.errorMessage = '';
      }

      _createClass(Register, [{
        key: "validateUser",
        value: function validateUser() {
          var userList = [this.username, this.email, this.firstName, this.lastName, this.password];

          for (var i = 0; i < userList.length; i++) {
            if (userList[i] == '') {
              return false;
            }
          }

          return this.password == this.passConf;
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var _this12 = this;

          // This free online service receives post submissions.
          this.http.post("http://localhost:1337/User/RegisterUser", {
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            passConf: this.passConf,
            admin: this.admin
          }).subscribe( // Data is received from the post request.
          function (data) {
            // Inspect the data to know how to parse it.
            _this12.errorMessage = data['errorMessage']['message'];
            console.log("POST call successful. Inspect response.", JSON.stringify(data));
          }, // An error occurred. Data is not received.
          function (error) {});
        }
      }]);

      return Register;
    }();

    Register.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    Register = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.html"))["default"]
    })], Register);
    /***/
  },

  /***/
  "./src/app/sold.directive.ts":
  /*!***********************************!*\
    !*** ./src/app/sold.directive.ts ***!
    \***********************************/

  /*! exports provided: SoldDirective */

  /***/
  function srcAppSoldDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoldDirective", function () {
      return SoldDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SoldDirective = /*#__PURE__*/function () {
      function SoldDirective() {
        _classCallCheck(this, SoldDirective);
      }

      _createClass(SoldDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.hovering = true;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.hovering = false;
        }
      }, {
        key: "gameSold",
        set: function set(value) {
          this.isSold = value;
        }
      }]);

      return SoldDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-sold')], SoldDirective.prototype, "isSold", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-sold-hovering')], SoldDirective.prototype, "hovering", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], SoldDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], SoldDirective.prototype, "onMouseLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SoldDirective.prototype, "gameSold", null);
    SoldDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[gameSold]'
    })], SoldDirective);
    /***/
  },

  /***/
  "./src/app/viewAttendees/app.viewAttendees.ts":
  /*!****************************************************!*\
    !*** ./src/app/viewAttendees/app.viewAttendees.ts ***!
    \****************************************************/

  /*! exports provided: ViewAttendees */

  /***/
  function srcAppViewAttendeesAppViewAttendeesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAttendees", function () {
      return ViewAttendees;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ApiService */
    "./src/app/ApiService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewAttendees = /*#__PURE__*/function () {
      function ViewAttendees(http, route) {
        _classCallCheck(this, ViewAttendees);

        this.http = http;
        this.route = route;
        this._apiService = new _ApiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"](http, this);
      }

      _createClass(ViewAttendees, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.route.paramMap.subscribe(function (params) {
            _this13.event = params.get('event');

            _this13.loadUser();
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          this._apiService.loadUser(this.loadUserCallback, true);
        }
      }, {
        key: "loadUserCallback",
        value: function loadUserCallback(result, _this) {
          if (result.errorMessage == "") {
            if (result.reqInfo.roles.indexOf('Admin') < 0) {
              window.location.href = 'http://localhost:4200/main';
              window.alert("Hey!  You're not an Admin! Get out of here!");
            } else {
              _this.loadEvents();
            }
          }
        }
      }, {
        key: "loadEvents",
        value: function loadEvents() {
          this._apiService.getData('Event/GetEvents', this.eventCallback);
        } // Callback needs a pointer '_this' to current instance.

      }, {
        key: "eventCallback",
        value: function eventCallback(result, _this) {
          if (result.errorMessage == "") {
            var events = result.events;

            for (var i = 0; i < events.length; i++) {
              if (events[i].name == _this.event) {
                _this.event = events[i];
              }
            }
          } else {
            alert(JSON.stringify(result.errorMessage));
          }
        }
      }]);

      return ViewAttendees;
    }();

    ViewAttendees.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    ViewAttendees = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewAttendees.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/viewAttendees/viewAttendees.html"))["default"]
    })], ViewAttendees);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\tom41\Desktop\agile-project\angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map