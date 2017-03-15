import { ActionReducer, Action } from '@ngrx/store';

import { ERROR } from '../actions';

export const InitialState = {
    test: ''
};

export const layoutStore: ActionReducer<Object> = (state: Object = InitialState, action: Action) => {

    switch (action.type) {
        case ERROR:
            return {
                ...state,
                test: 'demo'
            };
        default:
            return state;
    }
};
