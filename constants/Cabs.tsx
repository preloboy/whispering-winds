
interface Cab {
    id: number;
    name: string;
    type: string;
    available: boolean;
}

export const cabs: Cab[] = [
    {
        id: 1,
        name: "Toyota Camry",
        type: "Sedan",
        available: true
    },
    {
        id: 2,
        name: "Honda Civic",
        type: "Sedan",
        available: false
    },
    {
        id: 3,
        name: "BMW 3 Series",
        type: "Sedan",
        available: true
    },
    {
        id: 4,
        name: "Mercedes C-Class",
        type: "Sedan",
        available: true
    }
];