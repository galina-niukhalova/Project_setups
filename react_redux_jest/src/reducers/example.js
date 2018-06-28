import * as types from '../constants/ActionsTypes';


export default function (state = '', action) {
    switch (action.type) {
        case types.EXAMPLE: return 'example';
            break;

        default: return state;
    }
}