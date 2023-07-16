import { Role } from './role';

export class User {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: Role;
    token?: string;
}