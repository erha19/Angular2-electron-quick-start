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
            // this.ref.detectChanges();
        });
    }

    onMethodClick(item: ActionItem) {
        this.defaultMethod = item;
    }
    onProtocolClick(item: ActionItem) {
        this.defaultProtocol = item;
    }
    onDragPaneResize(data: dragData) {
        console.log(data)
        this.draggingSign = true;
        this.draggingDiff = data.diff;
        this.draggingDirection = data.direction;
        this.layout.calculatePosition(data.direction, data.value, this.draggingDiff)
    }
    onDragPaneMouseMove($event?: MouseEvent) {
        // $event.preventDefault();
        if (!this.draggingSign) {
            return;
        }
        this.clearSlct();
        //release MouseEvent
        if ($event.clientX < 10 || $event.clientX > window.innerWidth - 10 || $event.clientY < 50 || $event.clientY > window.innerHeight - 10) {
            this.draggingSign = false;
            return;
        }

        if (this.draggingDirection == 'v') {
            if (window.innerHeight - $event.clientY - this.draggingDiff >= 790) {
                return;
            } else {
                this.layout.calculatePosition(this.draggingDirection, window.innerHeight - $event.clientY - this.draggingDiff, this.draggingDiff)
            }

        }
        else {
            if ($event.clientX - this.draggingDiff >= 960) {
                return;
            } else {
                this.layout.calculatePosition(this.draggingDirection, $event.clientX - this.draggingDiff, this.draggingDiff)
            }
        }
    }
    onDragPaneMouseUp($event?: MouseEvent) {
        $event.preventDefault();
        this.draggingSign = false;
    }
    clearSlct() {
        "getSelection" in window ? window.getSelection().removeAllRanges() : document.selection.empty();
    }

}
