import { ActionReducer, Action } from '@ngrx/store';

import { ERROR } from '../actions';

export const InitialState = {
    bottomSidePanePosition: { left: 281, height: 240 },
    bottomSideDividerPosition: { left: 288, bottom: 246 },
    leftSidePanePosition: { width: 280 },
    leftSideDividerPosition: { left: 280 },
    contentPanePosition: { 'margin-left': 280, bottom: 260 }
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
