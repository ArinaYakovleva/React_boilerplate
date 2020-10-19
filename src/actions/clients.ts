export const CLIENTS_LOAD = 'CLIENTS_LOAD';
export const SEND_DATA = 'SEND_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

type ClientsLoadActions = {
    type: typeof CLIENTS_LOAD;

};

type SendDataActions = {
    type: typeof SEND_DATA;
    payload: any;
};

type RemoveDataActions ={
    type: typeof REMOVE_DATA;
    payload: number;
}

export const clientsLoadActions = (): ClientsLoadActions => ({
    type: CLIENTS_LOAD,
});

export const sendDataActions = (client: any): SendDataActions => ({
    type: SEND_DATA,
    payload: client,
});

export const removeDataActions = (id: number):RemoveDataActions => ({
    type: REMOVE_DATA,
    payload: id,
})