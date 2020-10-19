import {CLIENTS_LOAD, SEND_DATA, REMOVE_DATA, EDIT_DATA} from '../actions/clients';
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
        case EDIT_DATA:
            const edited = action.payload;
            return{
                ...state,
                entries: state.entries.map((item) => {
                    if(item.id === edited.id){
                    return {
                        ...item,
                        firstName: edited.firstName,
                        lastName: edited.lastName,
                        age: edited.age,
                        phone: edited.phone,
                        vehicles : [{                    
                            manufacturer: item.vehicles[0].manufacturer,
                            model: item.vehicles[0].model,
                            year: item.vehicles[0].year,
                        }]}
                    }
                    return item;
                }),
            }
            
        default:
            return state;
    }
   
}; 



