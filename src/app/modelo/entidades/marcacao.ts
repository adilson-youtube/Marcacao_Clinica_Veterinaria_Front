import { Servico } from "src/app/servicos/servico.service";
import { Role } from "../enumerados/Role";
import { Animal } from "./animal";
import { Endereco } from "./endereco";
import { Veterinario } from "./veterinario";

export class Marcacao {
    id = 0;
    diaSemana: Date = new Date();
    diaMes: Date = new Date();
    ano: Date = new Date();
    animal: Animal = new Animal();
    veterinario: Veterinario = new Veterinario();
    servicos: Array<Servico> = [];
}
