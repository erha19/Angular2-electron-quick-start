import { AppState } from './../store/appState.store';
/**
 * Import decorators and services from angular
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'eo-app', // <app></app>
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <div>
        <main>
            <router-outlet></router-outlet>
        </main>
    </div>
    `
})
export class AppComponent implements OnInit {
    //component initialization
    isDarkTheme: boolean = false;

    ngOnInit() {
        //check authentication
    }

    checkAuthentication() { }
}
