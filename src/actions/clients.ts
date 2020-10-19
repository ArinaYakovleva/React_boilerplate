export const CLIENTS_LOAD = 'CLIENTS_LOAD';

type ClientsLoadActions = {
    type: 'CLIENTS_LOAD';

}


export const clientsLoadActions = (clients: any): ClientsLoadActions => ({
    type: CLIENTS_LOAD,
});

