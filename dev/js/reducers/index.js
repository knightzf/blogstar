import {combineReducers} from 'redux';
import UserInfoReducer from './userinfo';

const allReducers = combineReducers({
    userinfo: UserInfoReducer,
});

export default allReducers
