import {combineReducers} from 'redux';
import {clientsReducer} from './clients';

export const rootReducer = combineReducers({
    clients: clientsReducer,
});