import { Role } from "../enumerados/Role";
import { Animal } from "./animal";
import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export class Proprietario extends Usuario {
    id = 0;
    nome: string = '';
    telefone = '';
    dataNascimento: Date = new Date();
    endereco: Endereco = new Endereco();
    animais: Array<Animal> = [];

    constructor() {
        super();
    }
}
