import {combineReducers} from 'redux'
import { setsReducer} from './sets';

export const rootReducer = combineReducers({
    sets: setsReducer
});




