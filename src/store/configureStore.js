import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer} from "../reducers";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose; //compose принимает функции справа налево return их композицию

export const store = createStore(
    rootReducer,
    composeEnhancers(
    applyMiddleware(thunk, logger)
    )
)