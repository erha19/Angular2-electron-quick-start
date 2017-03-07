/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Setup redux with ngrx
import { Store, StoreModule } from '@ngrx/store';
import { authStore, authInitialState } from './store/auth.store';

/**
 * Import our child components
 */
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './components/app.component';

/**
 * Import material UI Components
 */
import { MaterialModule } from '@angular/material';

import { routes } from './app.routes';

/**
 * Import the authentication service to be injected into our component
 */

/*
 * provide('AppStore', { useValue: appStore }),
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.provideStore({ authStore }, { authStore: authInitialState }),
    ],
    providers: [],
    declarations: [AppComponent, HomeComponent, NavbarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
