import { Client } from '../../mocks/clients/clients.interface';

export interface FormsComponentProps {
    sendData: () => void ;
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