export interface Vehicle {
    manufacturer: string;
    model: string;
    image?: string;
    year: number;
}

export interface Client {
    firstName: string;
    lastName: string;
    age: number;
    phone?: string;
    vehicles?: Vehicle[];
}

