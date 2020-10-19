import Item from "antd/lib/list/Item";

export const CLIENTS_LOAD = 'CLIENTS_LOAD';
export const SEND_DATA = 'SEND_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const EDIT_DATA = 'EDIT_DATA';

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

type EditDataAction = {
    type: typeof EDIT_DATA;
    payload: any;
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
});

export const editDataActions = (item: any): EditDataAction => ({
    type: EDIT_DATA,
    payload: item,
});
