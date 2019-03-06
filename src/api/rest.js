import axios from 'axios';

const defaults = {
    baseURL: './data/',
};

export function loadProfile() {
    const data = [
        {
            "id": 1,
            "username": "skasika",
            "firstName": "Standa",
            "lastName": "Klasik",
            "email": "stanislav.kasika@gmail.com",
            "country": "cz",
            "language": "cs",
            "role": [
                {
                    "name": "admin",
                    "label": "admin"
                }
            ]
        }
    ]

    return Promise.resolve(data);
}