// import redux dev-tool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Setup redux with ngrx
import { Store, StoreModule } from '@ngrx/store';
import { layoutStore, InitialState } from './reducers';

/**
 * Import our ui components
 */
import { ActionButtonComponent } from './ui-components/action-button/action-button.component'
import { DragPaneComponent } from './ui-components/drag-pane/drag-pane.component'
/**
 * Import our child components
 */
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './components/app.component';

/**
 *  Import our providers
 */
import { LayoutService } from './services/layout.service';

/**
 * Import material UI Components
 */
// import { MaterialModule } from '@angular/material';

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
        // MaterialModule.forRoot(),
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.provideStore({
            layoutStore
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [LayoutService],
    declarations: [
        //ui-components
        ActionButtonComponent,
        DragPaneComponent,
        //custom-components
        AppComponent,
        HomeComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
