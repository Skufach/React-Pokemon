import {combineReducers} from 'redux'
import { setsReducer} from './setsReducer';
import {setReducer} from './setReducer'

export const rootReducer = combineReducers({
    main: setsReducer,
    set_page: setReducer
});




