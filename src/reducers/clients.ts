import update from 'react-addons-update';
import {CLIENTS_LOAD, SEND_DATA, REMOVE_DATA} from '../actions/clients';
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

        case REMOVE_DATA:
            const id = action.payload;
            console.log(id);
            
            return {
                ...state,
                entries: state.entries.filter((item: any) => item.id !== id),
            };

        default:
            return state;
    }
   
}; 



