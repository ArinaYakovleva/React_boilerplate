import {CLIENTS_LOAD} from '../actions/clients';
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
    default:
        return state;
    }
   
}; 

