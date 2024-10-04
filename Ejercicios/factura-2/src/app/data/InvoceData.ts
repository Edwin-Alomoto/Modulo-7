import { Invoice } from '../model/Invoice';

export const InvoiceData: Invoice = {
    id: '001',
    company: {
        ruc: '0011754772778',
        name: 'ClearmindsConsultores',
        address: {
            city: 'Quito',
            principalStreet: 'Juan Pablo Sanz',
            secondaryStreet: 'Iñaquito',
            code: 'N-57',
        },
    },

    customer: {
        id: '478945614578',
        name: 'Edwin ',
        surname: 'Ariel',
        address: {
            city: 'Quito',
            principalStreet: 'Bicentenario',
            secondaryStreet: 'Calle las margaritaas',
            code: 'N-57',
        },
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: 'Papas Fritas',
                price: 0.5,
                description: 'Las papas saborsas',
                category: {
                    id: 120,
                    name: 'Snacks',
                },
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: 'Doritos',
                price: 0.6,
                description: 'de queso',
                category: {
                    id: 125,
                    name: 'Snacks',
                },
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: 580,
                name: 'cachitos',
                price: 0.3,
                description: 'cachudos',
                category: {
                    id: 122,
                    name: 'Snacks',
                },
            },
            quantity: 100,
        },
    ],
};
