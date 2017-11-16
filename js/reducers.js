import { combineReducers } from 'redux';


const demo = (state = {}, action) => {
    return state;
};

const rootReducer = combineReducers({
    demo: demo,
});

export default rootReducer
