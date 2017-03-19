/**
 * tool-lib
 */
'use strict';
let tools = {
    namespace: (name?: string) => {
        return (v?: string) => {
            return name + '-' + v;
        }
    },
    transformPositon: (obj: any) => {
        let result = Object.assign({}, obj);
        for (let i in result) {
            for (let j in result[i]) {
                if (typeof result[i][j] == 'number')
                    result[i][j] = result[i][j] + 'px';
            }
        }
        return result;
    },
    px2num: (obj: any) => {
        let result = Object.assign({}, obj);
        for (let i in result) {
            for (let j in result[i]) {
                if (typeof result[i][j] == 'string')
                    result[i][j] = +result[i][j].replace('px', '');
            }
        }
        return result;
    }
}

export const NameSpace = tools.namespace.bind(tools);
export const Tools = tools;