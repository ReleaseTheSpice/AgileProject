import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';

import { Main }             from './main/app.main';
import { MyEvents }         from './myEvents/app.myEvents';
import { Register }         from './register/app.register';
import { Login }            from './login/app.login';
import { CreateEvent }      from "./createEvent/app.createEvent";
import { EventManager}      from "./eventManager/app.eventManager";
import { ViewAttendees }    from "./viewAttendees/app.viewAttendees";
import { Forum }            from "./forum/app.forum";
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
    //MAIN PAGES
  // { path: 'main', component: Main },
  { path: 'myEvents', component: MyEvents },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'createEvent', component: CreateEvent },
  { path: 'eventManager', component: EventManager },
  { path: 'viewAttendees/:event', component: ViewAttendees },
  { path: 'forum', component: Forum },
  { path: 'product', component: ProductComponent},

    //REDIRECT PATHS
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: '**', component: Forum }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
