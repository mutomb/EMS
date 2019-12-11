import { SEARCH_TEXT_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    query: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_TEXT_CHANGED:
            return { ...state, query: action.payload };
        default:
            return state;
    }
};
