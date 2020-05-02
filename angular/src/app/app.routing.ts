import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';

import { Main }             from './app.main';
import { MyEvents }         from './app.myEvents';
import { Register }         from './app.register';
import { Login }            from './app.login';
import { CreateEvent }      from "./app.createEvent";
import { EventManager}      from "./app.eventManager";
import { ViewAttendees }    from "./app.viewAttendees";
import { Forum }            from "./app.forum";
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
    //MAIN PAGES
  { path: 'main', component: Main },
  { path: 'myEvents', component: MyEvents },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'createEvent', component: CreateEvent },
  { path: 'eventManager', component: EventManager },
  { path: 'viewAttendees/:event', component: ViewAttendees },
  { path: 'forum', component: Forum },
  { path: 'product', component: ProductComponent},

    //REDIRECT PATHS
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: Main }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
