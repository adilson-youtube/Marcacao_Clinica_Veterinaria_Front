import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Veterinario } from 'src/app/modelo/entidades/veterinario';
import { VeterinarioservicoService } from 'src/app/servicos/veterinarioservico.service';
import { VeterinarioStep } from 'src/app/servicos/veterinariostep.service';

@Component({
  selector: 'app-dados-pessoais-veterinario',
  templateUrl: './dados-pessoais-veterinario.component.html',
  styleUrls: ['./dados-pessoais-veterinario.component.css']
})
export class DadosPessoaisVeterinarioComponent implements OnInit {

  veterinario = new Veterinario();

  generoSelecionado: any = {};

  dateValue: Date = new Date;

  generos: any[] = [
      {name: 'Masculino', code: 'Masculino'},
      {name: 'Femenino', code: 'Femenino'}
  ];

  items: MenuItem[] = [];

  
  constructor(
    public veterinarioStep: VeterinarioStep,
    private router: Router,
    private veterinarioServico: VeterinarioservicoService
  ) { }

  ngOnInit(): void {
    this.veterinario = this.veterinarioStep.getVeterinario();
  }

  proximo(): void {
    this.veterinario.genero = this.generoSelecionado.name;
    this.veterinarioStep.setVeterinario(this.veterinario);
    this.router.navigate(['registarVeterinario/confirmacao-veterinario']);
  }


  retroceder(): void {
    this.veterinarioStep.setVeterinario(this.veterinario);
    this.router.navigate(['registarVeterinario/acesso-veterinario']);
  }

  salvar(): void {
    this.veterinario.genero = this.generoSelecionado.code;
    console.log("Os dados do Veterinario: "+JSON.stringify(this.veterinario));
    this.veterinarioServico.salvarVeterinario(this.veterinario).subscribe( novo => {
      console.log("Novo Usuario Inserido! "+ novo);
    },
    error => {console.log("Erro "+error.message);});
  }

  
}
