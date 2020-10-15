import { Client } from '../../mocks/clients/clients.interface';

export interface FormsComponentProps {
    length: number;
    edited: boolean;
    id: number;
    sendData: (arr: Client, func: () => void) => void ;
    onUpdate: (arr: Client) => void;
}


export interface FormsComponentState {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    vehicle: string;
    model: string;
    year: number;
    [x: number]: any;
}