/**
 * Include angular2 dependencies including HTTP dependencies
 * and Injectable and Inject
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

/**
 * Import the ngrx configured store
 */
import { Store } from '@ngrx/store';
import { AppState } from './../store/appState.store';


@Injectable()
export class LayoutService {

  //Inject the store to make sure state changes go through the store
  constructor(public store: Store<AppState>) {
    //authenticate and call the store to update the token
  }

}
