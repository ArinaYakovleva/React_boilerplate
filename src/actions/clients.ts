export const CLIENTS_LOAD = 'CLIENTS_LOAD';
export const SEND_DATA = 'SEND_DATA';

type ClientsLoadActions = {
    type: 'CLIENTS_LOAD';

}


export const clientsLoadActions = (): ClientsLoadActions => ({
    type: CLIENTS_LOAD,
});

export const sendDataActions = () => {

}

