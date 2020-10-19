import { Client } from '../mocks/clients/clients.interface';


export interface AppContainerComponentProps {
    clientsLoadActions: any;
    clients: Client[];
}