import { IAddress } from "./IAddress";

export const customerTableColumns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "phone",
      label: "PHONE",
    },
    {
      key: "gender",
      label: "Geschlecht",
    },
    {
        key: "age",
        label: "Alter",
    },
    {
        key: "hasNotes",
        label: "Notes"
    },
    {
        key: "hasActiveAppointment",
        label: "Active Appointment"
    },
    {
        key: "appointmentAmount",
        label: "handles"
    },
    {
        key: "isFavourite",
        label: "Favourite"
    }
];

export interface ICustomer {
    key: string;
    name: string;
    email: string;
    phone: string;
    address: IAddress;
    birthDate: Date;
    age: number;
    gender: string;
    handles: number;
    lastAppointment: string;
    appointmentAmount: number;
    hasActiveAppointment: boolean;
    hasNotes: boolean;
    isFavourite: boolean;
}

const demoCustomers: ICustomer[] = [];

for (let i = 1; i <= 15; i++) {
  const demoCustomer: ICustomer = {
    key: i.toString(),
    name: `Customer ${i}`,
    email: `customer${i}@example.com`,
    phone: `+43 ${Math.floor(Math.random() * 1000000000) + 100000000}`,
    address: {
      country: 'Austria',
      city: 'Vienna',
      postal: Math.floor(Math.random() * 90000) + 10000,
      street: `Street ${i}`,
      streetNumber: i * 10,
    },
    birthDate: new Date(`19${80 + i}-01-01`),
    age: Math.floor(Math.random() * 30) + 10,
    gender: i % 2 === 0 ? 'Male' : 'Female',
    handles: Math.floor(Math.random() * 10) + 1,
    lastAppointment: '2023-01-15',
    appointmentAmount: Math.floor(Math.random() * 10) + 1,
    hasActiveAppointment: i % 3 == 0,
    hasNotes: i % 2 == 0,
    isFavourite: i % 4 == 0,
  };

  demoCustomers.push(demoCustomer);
}
  
  export default demoCustomers;