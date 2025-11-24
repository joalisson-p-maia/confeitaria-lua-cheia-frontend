import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encomenda } from '../interfaces/encomenda.interface';

@Injectable({
  providedIn: 'root'
})
export class EncomendasService {

  private api = 'https://confeitaria-lua-cheia-backend.onrender.com/api/encomendas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Encomenda[]> {
    return this.http.get<Encomenda[]>(this.api + '/listar');
  }

  obterPorId(id: string): Observable<Encomenda> {
    return this.http.get<Encomenda>(`${this.api}/buscar/${id}`);
  }

  criar(data: Encomenda): Observable<Encomenda> {
    return this.http.post<Encomenda>(this.api + '/criar', data);
  }

  editar(id: number, data: Encomenda): Observable<Encomenda> {
    return this.http.put<Encomenda>(`${this.api}/editar/${id}`, data);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/deletar/${id}`);
  }
}
