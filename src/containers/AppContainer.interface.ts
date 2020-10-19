import { Client } from '../mocks/clients/clients.interface';


export interface AppContainerComponentProps {
    clientsLoadActions: any;
    clients: Client[];
    sendDataActions: any;
    removeDataActions: any;
    editDataActions: any;
}

export interface AppContainerState {
    isAnyCorrect: boolean;
}