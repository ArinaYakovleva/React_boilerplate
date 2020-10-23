export const SEND_DATA = 'SEND_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const CLIENTS_FETCH_DATA_SUCCESS = 'CLIENTS_FETCH_DATA_SUCCESS';


type SendDataActions = {
    type: typeof SEND_DATA;
    payload: any;
};

type RemoveDataActions ={
    type: typeof REMOVE_DATA;
    payload: string;
}

type EditDataAction = {
    type: typeof EDIT_DATA;
    payload: any;
}

type FetchDataAction = {
    type: typeof CLIENTS_FETCH_DATA_SUCCESS;
    payload: any
}

export const fetchClientsSuccess = (clients: any): FetchDataAction => {
    return {
        type: CLIENTS_FETCH_DATA_SUCCESS,
        payload: clients
    }
}


export const sendDataActions = (client: any): SendDataActions => ({
    type: SEND_DATA,
    payload: client,
});

export const removeDataActions = (id: string): RemoveDataActions => ({
    type: REMOVE_DATA,
    payload: id,
});

export const editDataActions = (item: any): EditDataAction => ({
    type: EDIT_DATA,
    payload: item,
});

export const clientsFetchData = (url: string) => {
    return (dispatch: any) => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                
                return response;
            })
            .then(response => {
                return response.json(); 
            })
            .then(clients => {
                dispatch(fetchClientsSuccess(clients));
            })
            .catch(err => console.log("ERROR",err));     
    }
};

export const clientsAddData = (url: string, client: any) => {
    return (dispatch: any) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
            .then(response => {
                dispatch(sendDataActions(true));
                return response
            })
            .then(response => response.json())
            .then(persons => console.log(persons))
            .catch(()=>{});
        }
}

export const clientsRemoveData = (url: string, id: string) => {
    return (dispatch: any) => {
        fetch(url, {
            method: 'DELETE',
        })
        .then(response => {
            dispatch(removeDataActions(id));
            return response;
        })
        .then(response => response.json())
        .catch(()=> {console.log("Error with deleting")});
    }
}


export const clientsUpdateData = (url: string, item: any) => {
    return(dispatch: any) => {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            dispatch(editDataActions(item));
            return response;
        })
        .then(response => response.json())
        .catch(() => console.log('Error with updating'));
        
    }
}

