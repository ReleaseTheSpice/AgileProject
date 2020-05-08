import { TestBed, async } from '@angular/core/testing';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Test} from 'tslint';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
          routing
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
});

