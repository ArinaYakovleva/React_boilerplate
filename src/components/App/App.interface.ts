import {Client} from '../../mocks/clients/clients.interface';

export interface AppComponentProps {
    clients: Client[];
}

export interface AppComponentState {
    formsData: Client[];
    isEdited: boolean;
    id: number;
    isAnyCorrect: boolean;
}