import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Cirurgia } from 'src/app/modelo/entidades/cirurgia';
import { Consulta } from 'src/app/modelo/entidades/consulta';
import { Exame } from 'src/app/modelo/entidades/exame';
import { Marcacao } from 'src/app/modelo/entidades/marcacao';
import { Servico } from 'src/app/modelo/entidades/servico';
import { Vacina } from 'src/app/modelo/entidades/vacina';
import { ServicosService } from 'src/app/servicos/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  providers: [MessageService]
})
export class ServicosComponent implements OnInit {

  nova = true;
  exibir = false;
  validar: boolean = false;

  servicos: Servico[];
  servico: Servico;
  // animal = new Animal();

  
  cirurgia: Servico = new Cirurgia();
  exame: Servico = new Exame();
  consulta: Servico = new Consulta();
  vacina: Servico = new Vacina();

  generoSelecionado: any = {};

  dateValue: Date = new Date;

  generos: any[] = [
      {name: 'Macho', code: 'Macho'},
      {name: 'Femia', code: 'Femia'}
  ];

  items: MenuItem[] = [];

  
  constructor(
    private router: Router,
    private servicosService: ServicosService,
    private messageService: MessageService
  ) 
  { 
    // this.cirurgia.preco = 94000; this.cirurgia.tipoServico = "Cirurgia Abdominal";
    // this.exame.preco = 49000; this.exame.tipoServico = "Exame Geral";
    // this.consulta.preco = 34000; this.consulta.tipoServico = "Consulta Externa";
    // this.vacina.preco = 11000; this.vacina.tipoServico = "Vacina Periodica";
    
    // this.servicos = [
    //   this.cirurgia, this.exame, this.consulta, this.vacina
    // ];
  }

  ngOnInit(): void {
    this.servicosService.listarServicos().subscribe( servicos => {
      this.servicos = servicos;
      console.log(this.servicos);
    });
  }

  get cabecario(): string {
    return (this.nova ? 'Registar' : 'Editar') + ' Animal';
  }

  salvarServico() {
    this.servicosService.salvarConsulta(this.consulta).subscribe( res => {      
      console.log("Consulta salva com Sucesso: "+res);
    });

  }

  modal(servico?: Servico): void  {
    this.nova = servico ? false : true;
    // this.servico = this.nova ? new Servico() : animal ?? new Servico();
    this.exibir = true;
    this.validar = false;
  }

  // cancelar(): void  {
  //   this.exibir = false;
  //   this.validar = false;
  //   this.animal = new Animal();
  // }

  // salvar(): void  {
  //   this.validar = true;
  //   let lista = this.proprietario.animais.find(a => a.nome?.toUpperCase() === this.animal.nome?.toUpperCase())?.nome;

  //   if (this.nova) {
  //     if (!lista) {
  //       this.animal.sexo = this.generos[0].name;
  //       this.proprietario.animais.unshift(this.animal); 
  //       this.limparCampos();
  //       this.mensagem('success', 'Animal registado com sucesso');
  //       // this.timeOut();
  //     } else {
  //       this. mensagem('warn', 'Animal já encontra-se registado');
  //       this.timeOut();
  //     }
  //   }
    
  // }

  timeOut(){
    setTimeout(() =>{ this.messageService.clear(); }, 30000);
  }

  mensagem(tipo: string, msg: string){
    this.messageService.add({severity: tipo, detail: msg});
  }

  // limparCampos() {
  //   this.validar = false;
  //   this.animal = new Animal();
  // }

}
