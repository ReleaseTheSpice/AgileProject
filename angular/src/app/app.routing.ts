import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';

import { Main }             from './main/app.main';
import { Register }         from './register/app.register';
import { Login }            from './login/app.login';
import { Forum }            from "./forum/app.forum";
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
    //MAIN PAGES
  { path: 'main', component: Main },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'forum', component: Forum },
  { path: 'product', component: ProductComponent},

    //REDIRECT PATHS
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: '**', component: Forum }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
