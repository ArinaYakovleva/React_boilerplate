import { Client } from '../mocks/clients/clients.interface';


export interface AppContainerComponentProps {
    clientsLoadActions: any;
    clients: Client[];
    fetchData: any;
    clientsAddData: any;
    clientsRemoveData: any;
    clientsUpdateData: any;
}

export interface AppContainerState {

}