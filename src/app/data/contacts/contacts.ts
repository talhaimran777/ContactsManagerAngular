export interface Contact {
  name: string;
  email: string;
  phone: string;
  hideDetails: boolean;
}

export const contacts: Contact[] = [
  {
    name: 'Talha Imran',
    email: 'talhaimran284@gmail.com',
    phone: '555-555-5555',
    hideDetails: false,
  },
  {
    name: 'Hamza Imran',
    email: 'hamzaimran284@gmail.com',
    phone: '555-555-5555',
    hideDetails: true,
  },
  {
    name: 'Hassaan Farouqui',
    email: 'hfarouqui3284@gmail.com',
    phone: '555-555-5555',
    hideDetails: true,
  },
];
