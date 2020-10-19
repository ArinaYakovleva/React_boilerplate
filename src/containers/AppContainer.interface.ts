import { Client } from '../mocks/clients/clients.interface';


export interface AppContainerComponentProps {
    clientsLoadActions: any;
    clients: Client[];
    sendDataActions: any;
}

export interface AppContainerState {
    isAnyCorrect: boolean;
}