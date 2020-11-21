import { Client } from "./clients.interface";

export const MockClients: Client[] = [
    {
        id: 0,
        firstName: "Андрей",
        lastName: "Джээсов",
        age: 31,
        phone: "9674566666",
        vehicles: [
            {
                manufacturer: "Toyota",
                model: "Corolla",
                year: 1998,
                image: "https://1.bp.blogspot.com/-sz02N6PTVbc/TuNRP5DivQI/AAAAAAAAAGA/DeQATrouqII/s1600/98812041990002-480.jpg"
            }
        ]
    },
    {   id: 1,
        firstName: "Борис",
        lastName: "Баранов",
        age: 20,
    },
    {   id: 2,
        firstName: "Анжела",
        lastName: "Ленинградская",
        age: 23,
        vehicles: [
            {
                manufacturer: "Mercedes",
                model: "S Classe S500",
                year: 2020
            }
        ]
    }
];
