import { Client } from '../../mocks/clients/clients.interface';

export interface FormsComponentProps {
    length: number;
    edited: boolean;
    id: number;
    sendData: any;
    onUpdate: (arr: Client) => void;
    isAnyCorrect: boolean;
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
    firstNameValid: boolean;
    lastNameValid: boolean;
    ageValid: boolean;
    phoneValid: boolean;
    formsValid: boolean;
}