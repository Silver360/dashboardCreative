import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UsersComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        NavigationComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
