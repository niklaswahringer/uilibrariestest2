import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUser, faCartShopping, faUsers, faCalendar, faGear, faDollarSign } from '@fortawesome/free-solid-svg-icons';

export interface MainNavItems {
    id: string;
    label: IconDefinition;
}

export const navItems: MainNavItems[] = [
    { id: "home", label: faHome },
    { id: "calendar", label: faCalendar },
    { id: "team", label: faUsers },
    { id: "services", label: faCartShopping },
    { id: "customer", label: faUser },
    { id: "billing", label: faDollarSign },
];