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
            return Object.assign({}, state, {entries: [...state.entries, action.payload.client]});

        default:
            return state;
    }
   
}; 

// const arr = 
// {   id: length,
//     firstName: this.state.firstName,
//     lastName: this.state.lastName,
//     age: this.state.age,
//     phone: this.state.phone ,
//     vehicles: [
//         {
//             manufacturer: this.state.vehicle,
//             model: this.state.model,
//             year: this.state.year,
//         }
//     ]
// };

// {   id: state.entries.length,
//     firstName: action.payload.client.firstName, 
//     lastName: action.payload.client.lastName,
//     age: action.payload.client.age,
//     phone: action.payload.client.phone,
    
// }