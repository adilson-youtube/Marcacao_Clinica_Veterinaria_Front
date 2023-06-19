import { Injectable } from '@angular/core';
import { ProprietariorepositorioService } from '../repositorios/proprietariorepositorio.service';
import { Observable } from 'rxjs';
import { Proprietario } from '../modelo/entidades/prorietario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioservicoService {

  constructor(private repositorio: ProprietariorepositorioService) { }

  //-- Órgão
    listarProprietarios(): Observable<Array<Proprietario>> {
        return this.repositorio.listarProprietarios();
    }
  
    salvarProprietario(usuario: Proprietario): Observable<Proprietario> {
        return this.repositorio.salvarProprietario(usuario);
    }
  
  //-- Área
    procurarProprietarioPorId(codigo: number): Observable<Proprietario> {
        return this.repositorio.procurarProprietarioPorId(codigo);
    }
  
    procurarProprietarioPorCodigo(codigo: string): Observable<Proprietario> {
        return this.repositorio.procurarProprietarioPorCodigo(codigo);
    }


}
