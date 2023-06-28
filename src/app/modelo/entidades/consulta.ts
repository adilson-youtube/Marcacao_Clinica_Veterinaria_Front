import { Servico } from "./servico";


export class Consulta extends Servico {
    id = 0;
    // tipoConsulta: string = '';
    descricao: string = '';

    constructor() {
        super();
    }
}
