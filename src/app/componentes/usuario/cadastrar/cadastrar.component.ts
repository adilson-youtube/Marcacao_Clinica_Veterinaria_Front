import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Proprietario } from 'src/app/modelo/entidades/prorietario';
import { Usuario } from 'src/app/modelo/entidades/usuario';
import { UsuarioService, UsuarioServico } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  providers: [MessageService],
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario;

  selectedState: any = null;

  dateValue: Date = new Date;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
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
    this.usuario = new Proprietario;
  }

}
