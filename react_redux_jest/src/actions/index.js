import * as types from '../constants/ActionsTypes';

export const actionExample = (params) => {
    return {
        type: types.EXAMPLE, 
        payload: params
    }
}