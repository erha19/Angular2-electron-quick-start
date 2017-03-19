/**
 * Import decorators and services from angular
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * Import the ngrx configured store
 */
import { Store } from '@ngrx/store';
import { AppState } from '../../store/appState.store';


// Allow us to use Notification API here.
declare var Notification: any;

@Component({
    selector: 'eo-request-pane',
    templateUrl: './requestPane.component.html',
    styleUrls: ['./requestPane.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RequestPaneComponent implements OnInit {
    name: string;

    constructor(public store: Store<AppState>) { }

    ngOnInit() {

    }

}
