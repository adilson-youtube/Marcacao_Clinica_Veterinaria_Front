import { Role } from "../enumerados/Role";

export class Usuario {
    id?: number = 0;
    usuario?: string = '';
    senha?: string = '';
    email?: string = '';
    role?: Role = Role.Usuario;
    dataCriacao?: Date = new Date();
    ultimoAcesso?: Date = new Date();
}
