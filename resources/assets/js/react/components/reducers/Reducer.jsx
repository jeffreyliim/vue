import {PostReducers} from './PostReducers';
import {RegisterReducer} from './RegisterReducer';
import {LoginReducer} from './LoginReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    posts: PostReducers,
    register: RegisterReducer,
    login: LoginReducer
});