import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { Main } from "./app.main";
import { Login } from "./app.login";
import { Register } from "./app.register";
import { MyEvents } from "./app.myEvents";
import { CreateEvent } from "./app.createEvent";
import { EventManager} from "./app.eventManager";
import { ViewAttendees } from "./app.viewAttendees";
import { Forum } from "./app.forum";
import { ProductComponent } from './product/product.component';
import { GameItemComponent } from './game-item/game-item.component';
import { GameItemFormComponent } from './game-item-form/game-item-form.component';
import { GameItemListComponent } from './game-item-list/game-item-list.component';
import { lookupGameList, lookForGames} from "./providers";
import { SoldDirective } from "./sold.directive";

@NgModule({
  declarations: [
    AppComponent,
    Main,
    Login,
    Register,
    MyEvents,
    CreateEvent,
    EventManager,
    ViewAttendees,
    Forum,
    ProductComponent,
    GameItemComponent,
    GameItemFormComponent,
    GameItemListComponent,
    SoldDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    { provide: lookupGameList, useValue: lookForGames}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
