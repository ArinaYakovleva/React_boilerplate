import update from 'react-addons-update';
import {CLIENTS_LOAD, SEND_DATA} from '../actions/clients';
import {MockClients} from '../mocks/clients/index';
import {Client} from '../mocks/clients/clients.interface';

type InitialStateType = {
    entries: Client[];
    loading: boolean;
}

const initialState:InitialStateType = {
    entries: [],
    loading: false,
};

export const clientsReducer = (state = initialState, action: any) => {
  switch(action.type){
        case CLIENTS_LOAD:
            return {
                ...state,
                entries: [...MockClients],
            };

        case SEND_DATA: 
    
            return Object.assign({}, state, {entries: [...state.entries, action.payload]});

        default:
            return state;
    }
   
}; 



