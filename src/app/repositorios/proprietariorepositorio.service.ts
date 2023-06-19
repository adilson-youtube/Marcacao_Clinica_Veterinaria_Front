import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proprietario } from '../modelo/entidades/prorietario';

@Injectable({
  providedIn: 'root'
})
export class ProprietariorepositorioService {
  baseUrl: string;

  constructor(private http: HttpClient) {
      this.baseUrl = `${environment.predefinidaUrl}`;
  }


//--- candidato -----
  listarProprietarios(): Observable<Array<Proprietario>> {
      const path = `Proprietario`;
      return this.http.get<Array<Proprietario>>(`${this.baseUrl}${path}`);
  }

  salvarProprietario(usuario: Proprietario): Observable<Proprietario> {
      const path = `Proprietario`;
      return this.http.post<Proprietario>(`${this.baseUrl}${path}`, usuario);
  }

  procurarProprietarioPorId(codigo: number): Observable<Proprietario> {
      const path = `Proprietario/${codigo}`;
      return this.http.get<Proprietario>(`${this.baseUrl}${path}`);
  }

  procurarProprietarioPorCodigo(codigo: string): Observable<Proprietario> {
      const path = `Proprietario/${codigo}`;
      return this.http.get<Proprietario>(`${this.baseUrl}${path}`);
  }

//------
}
