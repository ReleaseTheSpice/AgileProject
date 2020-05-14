import { TestBed, async } from '@angular/core/testing';
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { Main } from "./main/app.main";
import { Login } from "./login/app.login";
import { Register } from "./register/app.register";
import { Forum } from "./forum/app.forum";
import { ProductComponent } from './product/product.component';
import { Purchases }  from './purchases/app.purchases';
import { Sales }  from './sales/app.sales';
import { GameItemComponent } from './game-item/game-item.component';
import { GameItemFormComponent } from './game-item-form/game-item-form.component';
import { GameItemListComponent } from './game-item-list/game-item-list.component';
import { lookupGameList, lookForGames} from "./providers";
import { SoldDirective } from "./sold.directive";
import { ProductModalComponent } from './product-modal/product-modal.component';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
          Main,
          Register,
          Login,
          Forum,
          ProductComponent,
          Purchases,
          Sales,
          GameItemComponent,
          GameItemFormComponent,
          GameItemListComponent,
          SoldDirective,
          ProductModalComponent
      ],
      imports: [
          routing,
          FormsModule,
          HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have login message`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.message).toEqual('Not logged in.');
  });

  it('tests login check', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.showContentIfLoggedIn();
    expect(app.token).toEqual('');
  });

  it('tests logout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(app.username);
    app.logout();
    expect(app.username).toEqual('');
  });

});
