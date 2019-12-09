import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';
/**provide data of all employees */
const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
