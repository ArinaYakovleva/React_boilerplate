import { SEND_DATA, REMOVE_DATA, EDIT_DATA, CLIENTS_FETCH_DATA_SUCCESS} from '../actions/clients';
import {Client} from '../mocks/clients/clients.interface';

type InitialStateType = {
    entries: Client[];
    loading: boolean;
}

const initialState:InitialStateType = {
    entries: [],
    loading: false,
};


export const clientsFetchReducer = (state = initialState, action: any) => { 
    switch(action.type){
        case CLIENTS_FETCH_DATA_SUCCESS: 
            return {
                ...state,
                entries: action.payload
            };
        case SEND_DATA:
            return Object.assign({}, state, {entries: [...state.entries, action.payload]});

        case REMOVE_DATA:
            const id = action.payload;
            return {
                ...state,
                entries: state.entries.filter((item: any) => item._id !== id),
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
                            manufacturer: edited.vehicles[0].manufacturer,
                            model: edited.vehicles[0].model,
                            year: edited.vehicles[0].year,
                        }]}
                    }
                    return item;
                }),
            }
        default:
            return state;
    }
}


