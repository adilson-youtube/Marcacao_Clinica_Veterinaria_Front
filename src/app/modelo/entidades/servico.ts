
import { TipoPagamento } from "../enumerados/tipopagamento";
import { Marcacao } from "./marcacao";

export class Servico {
    id = 0;
    data: Date = new Date();
    preco: number = 0;
    tipoPagamento: TipoPagamento = TipoPagamento.Cash;
    marcacoes: Array<Marcacao> = [];
}
