import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insumo } from '../interfaces/insumo.interface';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  private api = 'http://localhost:3000/api/insumos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Insumo[]> {
    return this.http.get<Insumo[]>(this.api + '/listar');
  }

  obterPorId(id: number): Observable<Insumo> {
    return this.http.get<Insumo>(`${this.api}/buscar/${id}`);
  }

  criar(data: Insumo): Observable<Insumo> {
    return this.http.post<Insumo>(this.api + '/criar', data);
  }

  editar(id: number, data: Insumo): Observable<Insumo> {
    return this.http.put<Insumo>(`${this.api}/editar/${id}`, data);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/deletar/${id}`);
  }
}
