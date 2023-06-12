import { Role } from "../enumerados/Role";

export abstract class Usuario {
    protected id = 0;
    protected usuario: string = '';
    protected senha: string = '';
    protected role: Role = Role.Usuario;
    protected dataCriacao: Date = new Date();
    protected ultimoAcesso: Date = new Date();

    constructor(){}
}
