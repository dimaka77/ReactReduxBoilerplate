import * as CONSTS from '../constants/ReducerConstants';
import * as ACTIONTYPES from '../constants/ActionConstants';
import { fromJS } from 'immutable';

export const INITIAL_STATE = {
    [CONSTS.LOADING]: false
};

/**
 * Returns error trace
 * @param {Object} action redux action
 * @return {Object} action erorr
 */
const handleError = (state, action = {}) => {
    console.error(`%c ACTION: ${action.type}, ERROR:`, 'background: #222; color: red', action.payload);
    return state;
};

const setLoadingState = (state, loading) => state.set(CONSTS.LOADING, fromJS(loading));

export default function(state = fromJS(INITIAL_STATE), action) {
    const { payload = {}, params = {} } = action;

    switch (action.type) {
        case ACTIONTYPES.SET_LOADING:
            return setLoadingState(state, params);
        default:
            return state;
    }
}
