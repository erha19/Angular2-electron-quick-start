import { ActionReducer, Action } from '@ngrx/store';

import { ERROR, Layout_H_Change, Layout_V_Change } from '../actions';

import { Tools } from '../lib/util';

export const InitialState = {
    bottomSidePanePosition: { left: 288, height: 240 },
    bottomSideDividerPosition: { left: 288, bottom: 240 },
    leftSidePanePosition: { width: 280 },
    leftSideDividerPosition: { left: 280 },
    contentPanePosition: { 'margin-left': 280, bottom: 250 }
};

const transformLayout = (direction: string, value: number, state: any) => {
    let result = Tools.px2num(state);
    if (direction == 'v') {
        let diff = value - result.bottomSideDividerPosition.bottom;
        if (value > 792)
            return result;
        result.bottomSideDividerPosition.bottom = value;
        result.bottomSidePanePosition.height = result.bottomSidePanePosition.height + diff;
        result.contentPanePosition.bottom = result.contentPanePosition.bottom + diff;
    }
    else if (direction == 'h') {
        let diff = value - result.leftSideDividerPosition.left;
        if (value < 280)
            return result;
        result.leftSideDividerPosition.left = value;
        result.leftSidePanePosition.width += diff;
        result.bottomSideDividerPosition.left += diff;
        result.bottomSidePanePosition.left += diff;
        result.contentPanePosition['margin-left'] += diff;
    }
    return result;
}


export const layoutStore: ActionReducer<Object> = (state: Object = InitialState, action: Action) => {
    let transformObject: any;;
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                test: 'demo'
            };
        case Layout_H_Change:
            transformObject = transformLayout('h', action.payload.value, state);
            return {
                ...state,
                ...transformLayout
            };
        case Layout_V_Change:
            transformObject = transformLayout('v', action.payload.value, state);
            return {
                ...state,
                ...transformLayout
            };

        default:
            return state;
    }
};
