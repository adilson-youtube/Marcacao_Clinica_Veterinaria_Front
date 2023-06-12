import { Role } from "../enumerados/Role";
import { Marcacao } from "./marcacao";

export class Veterinario {
    id = 0;
    nome: string = '';
    especialidade: string = '';
    marcacoes: Array<Marcacao> = [];
}
