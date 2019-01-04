import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
    combineReducers({
        auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default  configureStore;
