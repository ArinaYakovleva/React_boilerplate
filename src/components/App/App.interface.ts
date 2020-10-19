import {Client} from '../../mocks/clients/clients.interface';

export interface AppComponentProps {
    clients: Client[];
    sendData: any;
    isAnyCorrect: boolean;
}

export interface AppComponentState {
    formsData: Client[];
    isEdited: boolean;
    id: number;
}