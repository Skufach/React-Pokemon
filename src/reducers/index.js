import {combineReducers} from 'redux'
import { setsReducer, setReducer} from './sets';

export const rootReducer = combineReducers({
    sets: setsReducer,
    pokemon_set: setReducer
});




