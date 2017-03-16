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


import { ActionItem } from '../../ui-components/action-button/action-item.model';

import { LayoutService } from '../../services/layout.service';
import { Tools } from '../../lib/util';

// Allow us to use Notification API here.
declare var Notification: any;
interface dragData {
    direction: string,
    diff: number,
    value: number
}

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

    draggingSign: boolean = false;
    draggingDiff: number;
    draggingDirection: string;
    //layout data
    layoutData: any;

    constructor(public store: Store<AppState>, private layout: LayoutService) {
        this.layout = layout;
    }

    ngOnInit() {
        let state = this.store.select('layoutStore').subscribe((state: any) => {
            this.layoutData = Tools.transformPositon(state);
            console.log(this.layoutData)
        });
    }

    onMethodClick(item: ActionItem) {
        this.defaultMethod = item;
    }
    onProtocolClick(item: ActionItem) {
        this.defaultProtocol = item;
    }
    onDragPaneResize(data: dragData) {
        this.draggingSign = true;
        this.draggingDiff = data.diff;
        this.draggingDirection = data.direction;
        this.layout.calculatePosition(data.direction, data.value, this.draggingDiff)
        console.log(data);
    }
    onDragPaneMouseMove($event?: MouseEvent) {
        if (!this.draggingSign) {
            return;
        }
        if (this.draggingDirection == 'v')
            this.layout.calculatePosition(this.draggingDirection, window.innerHeight - $event.clientY - this.draggingDiff, this.draggingDiff)
        else
            this.layout.calculatePosition(this.draggingDirection, $event.clientX - this.draggingDiff, this.draggingDiff)
    }
    onDragPaneMouseUp($event?: MouseEvent) {
        this.draggingSign = false;
    }
}
