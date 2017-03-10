/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
/**
 * Import the ngrx configured store
 */
import { Store } from '@ngrx/store';
import { AppState } from '../../store/appState.store';

import * as path from 'path';

import { ActionItem } from '../../ui-components/action-button/action-item.model';

// Allow us to use Notification API here.
declare var Notification: any;

@Component({
    selector: 'ae-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    name: string;
    defaultMethod: ActionItem = { id: 0, text: 'GET' }
    methods: ActionItem[] = [
        {
            id: 0,
            text: 'GET',
        }, {
            id: 1,
            text: 'POST',
        }, {
            id: 2,
            text: 'PUT',
        }, {
            id: 3,
            text: 'DELETE',
        }, {
            id: 4,
            text: 'HEAD',
        }, {
            id: 5,
            text: 'OPTIONS',
        }];
    defaultProtocol: ActionItem = { id: 0, text: 'HTTP' };
    protocols: ActionItem = [{
        id: 0,
        text: 'HTTP',
    }, {
        id: 1,
        text: 'HTTPS',
    }]
    messageForm = new FormGroup({
        messageText: new FormControl('Angular2'),
    });

    constructor(public store: Store<AppState>) { }

    ngOnInit() {
        let state = this.store.select('authStore').subscribe((state: any) => {
            this.name = state.username;
        });
    }
    doNotify() {
        let message = {
            title: 'Content-Image Notification',
            body: 'Short message plus a custom content image',
        };
        new Notification(message.title, message);
    }
    onMethodClick(item: ActionItem) {
        this.defaultMethod = item;
    }
    onProtocolClick(item: ActionItem) {
        this.defaultProtocol = item;
    }
}
