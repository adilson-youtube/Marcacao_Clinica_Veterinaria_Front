import { Especie } from "./especie";
import { Proprietario } from "./prorietario";

export class Animal {
    id = 0;
    nome: string = '';
    sexo: string = '';
    dataNascimento: Date = new Date();
    especie: Especie = new Especie();
    proprietario: Proprietario = new Proprietario();
    marcacoes: Date = new Date();
}
