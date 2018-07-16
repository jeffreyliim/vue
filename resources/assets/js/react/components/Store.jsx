import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/Reducer';
import thunk from 'redux-thunk';
/*
 * thunk allows the dispatch function to pass through from ur actions defined in
 * mapDispatchToProps into ur actions in ur actions file.
 * */

const changeCountryError = (store) => (next) => (action) => {
    try {
        next(action);
    }
    catch (e) {
        console.log(e)
    }
};

const store = createStore(reducers, applyMiddleware(thunk, logger, changeCountryError));
export default store;