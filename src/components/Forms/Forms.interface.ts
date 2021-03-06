import { Client } from '../../mocks/clients/clients.interface';

export interface FormsComponentProps {
    length: number;
    edited: boolean;
    id: string;
    sendData: any;
    onUpdate: any;
    
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
    isFirstNameValid: boolean;
    isLastNameValid: boolean;
    isAgeValid: boolean;
    isPhoneValid: boolean;
    formsValid: boolean;
    isAnyCorrect: boolean;
}