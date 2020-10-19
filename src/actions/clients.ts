export const CLIENTS_LOAD = 'CLIENTS_LOAD';
export const SEND_DATA = 'SEND_DATA';

type ClientsLoadActions = {
    type: typeof CLIENTS_LOAD;

};

type SendDataActions = {
    type: typeof SEND_DATA;
    payload: any;
};

export const clientsLoadActions = (): ClientsLoadActions => ({
    type: CLIENTS_LOAD,
});

export const sendDataActions = (client: any): SendDataActions => ({
    type: SEND_DATA,
    payload: client,
});

