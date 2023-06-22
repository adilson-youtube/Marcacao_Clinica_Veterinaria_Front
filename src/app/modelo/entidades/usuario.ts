import { Role } from "../enumerados/Role";
import { Proprietario } from "./prorietario";
import { Veterinario } from "./veterinario";

export class Usuario {
    id?: number = 0;
    usuario?: string = '';
    senha?: string = '';
    email?: string = '';
    role?: Role = Role.Usuario;
    dataCriacao?: Date;
    ultimoAcesso?: Date;
    // proprietario?: Proprietario = new Proprietario();
    // veterinario?: Veterinario = new Veterinario();
}
