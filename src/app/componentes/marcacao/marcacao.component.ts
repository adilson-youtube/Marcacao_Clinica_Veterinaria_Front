import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/modelo/entidades/servico';
import { TipoPagamento } from 'src/app/modelo/enumerados/tipopagamento';

@Component({
  selector: 'app-marcacao',
  templateUrl: './marcacao.component.html',
  styleUrls: ['./marcacao.component.css']
})
export class MarcacaoComponent implements OnInit {

  servicos: Servico[];

  selectedServicos: Servico[];

  selectedState: any = null;

  dateValue: Date = new Date;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;

  constructor() { 
    this.servicos = [
      {id: 1, data: new Date(), preco: 13000, tipoPagamento: TipoPagamento.Cash, marcacoes: [] },
      {id: 2, data: new Date(), preco: 34500, tipoPagamento: TipoPagamento.Cash, marcacoes: [] },
      {id: 3, data: new Date(), preco: 98770, tipoPagamento: TipoPagamento.Cash, marcacoes: [] },
      {id: 4, data: new Date(), preco: 23440, tipoPagamento: TipoPagamento.Cash, marcacoes: [] },
    ]
  }

  ngOnInit(): void {
  }

}
