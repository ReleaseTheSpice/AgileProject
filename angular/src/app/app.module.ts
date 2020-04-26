import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { Main } from "./app.main";
import { Login } from "./app.login";
import { Register } from "./app.register";
import { MyEvents } from "./app.myEvents";
import { CreateEvent } from "./app.createEvent";
import { EventManager} from "./app.eventManager";
import { ViewAttendees } from "./app.viewAttendees";

@NgModule({
  declarations: [
    AppComponent, Main, Login, Register, MyEvents, CreateEvent, EventManager, ViewAttendees
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
