import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosrepositorioService } from '../repositorios/servicosrepositorio.service';
import { Servico } from '../modelo/entidades/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private repositorio: ServicosrepositorioService) { }

  //-- Órgão
  listarServicos(): Observable<Array<Servico>> {
        return this.repositorio.listarServicos();
    }
  
    salvarServico(servico: Servico): Observable<Servico> {
        return this.repositorio.salvarServico(servico);
    }
  
  //-- Área
  procurarServicoPorId(codigo: number): Observable<Servico> {
        return this.repositorio.procurarServicoPorId(codigo);
    }
  
    // procurarProprietarioPorCodigo(codigo: string): Observable<Servico> {
    //     return this.repositorio.procurar(codigo);
    // }



}
