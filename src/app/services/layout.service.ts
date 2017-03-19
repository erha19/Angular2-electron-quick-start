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

import { ERROR, Layout_H_Change, Layout_V_Change } from '../actions';

@Injectable()
export class LayoutService {

  //Inject the store to make sure state changes go through the store
  constructor(public store: Store<AppState>) {
  }

  calculatePosition(direction: string, value: number, diff: number) {
    if (direction == 'v') {
      this.store.dispatch({
        type: Layout_V_Change,
        payload: {
          value: value
        }
      })
    }
    else {
      this.store.dispatch({
        type: Layout_H_Change,
        payload: {
          value: value
        }
      })
    }
  }

}
