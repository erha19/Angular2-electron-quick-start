/**
 * tool-lib
 */
'use strict';
let tools = {
    namespace: function (name) {
        return function (v?: string) {
            return name + '-' + v;
        }
    }
}

export const NameSpace = tools.namespace.bind(tools);