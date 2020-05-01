import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { Main } from "./app.main";
import { Login } from "./app.login";
import { Register } from "./app.register";
import { MyEvents } from "./app.myEvents";
import { CreateEvent } from "./app.createEvent";
import { EventManager} from "./app.eventManager";
import { ViewAttendees } from "./app.viewAttendees";
import { Forum } from "./app.forum";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, Main, Login, Register, MyEvents, CreateEvent, EventManager, ViewAttendees, Forum
      ],
      imports: [
        BrowserModule, HttpClientModule, FormsModule, routing
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have login message', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.message).toEqual('Not logged in.');
  }));
  it('should get array of messages', async(() => {
    const fixture = TestBed.createComponent(Forum);
    const app = fixture.debugElement.componentInstance;
    expect(app._messagesArray).toEqual(undefined);
  }));
});
