const today = new Date();

function getDateMinus(days) {
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
}

const DUMMYEXPENSES = [
    {
        id: 'e1',
        description: 'Shoes',
        amount: 59.99,
        date: getDateMinus(0),
    },
    {
        id: 'e2',
        description: 'Groceries',
        amount: 32.50,
        date: getDateMinus(1),
    },
    {
        id: 'e3',
        description: 'Coffee',
        amount: 4.99,
        date: getDateMinus(2),
    },
    {
        id: 'e4',
        description: 'Petrol',
        amount: 45.00,
        date: getDateMinus(3),
    },
    {
        id: 'e5',
        description: 'Snacks',
        amount: 8.25,
        date: getDateMinus(4),
    },

    {
        id: 'e6',
        description: 'Book',
        amount: 14.99,
        date: getDateMinus(10),
    },
    {
        id: 'e7',
        description: 'T-shirt',
        amount: 22.99,
        date: getDateMinus(12),
    },
    {
        id: 'e8',
        description: 'Headphones',
        amount: 89.99,
        date: getDateMinus(15),
    },
    {
        id: 'e9',
        description: 'Dinner',
        amount: 64.00,
        date: getDateMinus(18),
    },
    {
        id: 'e10',
        description: 'Backpack',
        amount: 39.99,
        date: getDateMinus(20),
    },
];

export default DUMMYEXPENSES;