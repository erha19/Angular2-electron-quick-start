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
    selector: 'eo-request-header',
    templateUrl: './requestHeader.component.html',
    styleUrls: ['./requestHeader.component.scss'],
})
export class RequestHeaderComponent implements OnInit {
    name: string;

    constructor(public store: Store<AppState>) { }

    ngOnInit() {

    }

}
