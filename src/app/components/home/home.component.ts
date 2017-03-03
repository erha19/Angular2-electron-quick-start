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

// Allow us to use Notification API here.
declare var Notification: any;

@Component({
  selector: 'ae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;

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
      title: "Content-Image Notification",
      body: "Short message plus a custom content image",
    };
    new Notification(message.title, message);
  }
}
