import {Client} from '../../mocks/clients/clients.interface';

export interface AppComponentProps {
    clients: Client[];
    sendData: any;
    removeData: any;
    editData: any;
}

export interface AppComponentState {
    isEdited: boolean;
    id: string;
}