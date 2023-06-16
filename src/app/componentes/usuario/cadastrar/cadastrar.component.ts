import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Proprietario } from 'src/app/modelo/entidades/prorietario';
import { Usuario } from 'src/app/modelo/entidades/usuario';
import { UsuarioServico } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  providers: [MessageService],
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario = new Proprietario();

  generoSelecionado: any = null;

  dateValue: Date = new Date;

  generos: any[] = [
      {name: 'Masculino', code: 'Masculino'},
      {name: 'Femenino', value: 'Femenino'}
  ];

  items: MenuItem[] = [];

  // constructor(public usuarioStep: UsuarioStep) { }
  constructor(private usuarioServico: UsuarioServico) { }

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
    console.log("O nome do Proprietario: "+this.usuario.nome);
  }

  salvar(): void {
    this.usuarioServico.salvarUsuario(this.usuario).subscribe( novo => {
      console.log("Novo Usuario Inserido!"+novo)
    });
  }

}
