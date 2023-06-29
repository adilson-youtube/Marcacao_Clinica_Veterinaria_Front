import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosrepositorioService } from '../repositorios/servicosrepositorio.service';
import { Servico } from '../modelo/entidades/servico';
import { Consulta } from '../modelo/entidades/consulta';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private repositorio: ServicosrepositorioService) { }

  
  listarServicos(): Observable<Array<Servico>> {
        return this.repositorio.listarServicos();
    }
  
    
    procurarServicoPorId(codigo: number): Observable<Servico> {
          return this.repositorio.procurarServicoPorId(codigo);
      }
  
    salvarServico(servico: Servico): Observable<Servico> {
        return this.repositorio.salvarServico(servico);
    }
  
  
  actualizarServico(id: number, servico: Servico): Observable<Servico> {
        return this.repositorio.actualizarServico(id, servico);
    }
  
  
  eliminarServico(id: number): Observable<Servico> {
        return this.repositorio.eliminarServico(id);
    }

  
    listarConsultas(): Observable<Array<Servico>> {
        return this.repositorio.listarConsultas();
    }
  
    
    procurarConsultaPorId(codigo: number): Observable<Servico> {
          return this.repositorio.procurarConsultaPorId(codigo);
      }
  
      salvarConsulta(consulta: Servico): Observable<Servico> {
        return this.repositorio.salvarConsulta(consulta);
    }
  
  
    actualizarConsulta(id: number, consulta: Consulta): Observable<Consulta> {
        return this.repositorio.actualizarConsulta(id, consulta);
    }
  
  
    eliminarConsulta(id: number): Observable<Consulta> {
        return this.repositorio.eliminarConsulta(id);
    }
  
    // procurarProprietarioPorCodigo(codigo: string): Observable<Servico> {
    //     return this.repositorio.procurar(codigo);
    // }



}
