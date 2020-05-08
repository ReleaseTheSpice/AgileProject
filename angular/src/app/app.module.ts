import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    Main,
    Login,
    Register,
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
