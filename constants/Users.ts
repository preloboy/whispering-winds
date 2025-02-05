
export interface UserProps {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    social: {
        facebook: string;
        twitter: string;
        instagram: string;
    }

}

export const Users: UserProps[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        social: {
            facebook: 'john.doe',
            twitter: 'johndoe',
            instagram: 'john.doe'
        }
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        address: '456 Elm St, Othertown, USA',
        social: {
            facebook: 'jane.smith',
            twitter: 'janesmith',
            instagram: 'jane.smith'
        }
    }
];