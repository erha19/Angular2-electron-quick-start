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
    selector: 'ae-app', // <app></app>
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <div [class.m2app-dark]="isDarkTheme">
        <main>
            <router-outlet></router-outlet>
            <br/>
            <md-slide-toggle (change)="isDarkTheme = !isDarkTheme" [checked]="isDarkTheme" color="primary">
                Set Dark theme
            </md-slide-toggle>
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
