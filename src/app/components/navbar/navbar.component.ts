/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
/**
 * Import the ngrx configured store
 */
import { Store } from '@ngrx/store';
import { AppState } from '../../store/appState.store';


// Allow us to use Notification API here.
declare var Notification: any;

@Component({
    selector: 'eo-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    name: string;

    constructor(public store: Store<AppState>) { }

    ngOnInit() {
        let state = this.store.select('authStore').subscribe((state: any) => {
            this.name = state.username;
        });
    }

}
