import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Proprietario } from 'src/app/modelo/entidades/prorietario';
import { Usuario } from 'src/app/modelo/entidades/usuario';
import { ProprietarioservicoService } from 'src/app/servicos/proprietarioservico.service';
import { UsuarioServico } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  providers: [MessageService],
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario = new Proprietario();

  generoSelecionado: any = {};

  dateValue: Date = new Date;

  generos: any[] = [
      {name: 'Masculino', code: 'Masculino'},
      {name: 'Femenino', code: 'Femenino'}
  ];

  items: MenuItem[] = [];

  // constructor(public usuarioStep: UsuarioStep) { }
  constructor(private proprietarioServico: ProprietarioservicoService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Informações Pessoais',
        routerLink: 'proprietario'
      },
      {
        label: 'Informações do Animal',
        routerLink: 'animal'
      },
      {
        label: 'Confirmação',
        routerLink: 'confirmacao'
      }
    ];
    // console.log("Os dados do Proprietario: "+this.usuario.nome);
  }

  salvar(): void {
    this.usuario.genero = this.generoSelecionado.code;
    console.log("Os dados do Proprietario: "+JSON.stringify(this.usuario));
    this.proprietarioServico.salvarProprietario(this.usuario).subscribe( novo => {
      console.log("Novo Usuario Inserido! "+ novo);
    },
    error => {console.log("Erro "+error.message);});
  }

}
