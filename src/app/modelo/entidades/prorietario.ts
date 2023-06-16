import { Role } from "../enumerados/Role";
import { Animal } from "./animal";
import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export class Proprietario extends Usuario {
    id?: number = 0;
    nome?: string = '';
    telefone?: string = '';
    genero?: string = '';
    dataNascimento?: Date = new Date();
    municipio?: string = '';
    bairro?: string = '';
    rua?: string = '';
    endereco?: Endereco = new Endereco();
    animais?: Array<Animal> = [];

    constructor() {
        super();
    }
}
