import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda } from '../interfaces/venda.interface';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private api = 'https://confeitaria-lua-cheia-backend.onrender.com/api/vendas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.api + '/listar');
  }

  listarPorMes(mes: number, ano: number): Observable<Venda[]> {
    return this.http.get<Venda[]>(`${this.api}/listar?mes=${mes}&ano=${ano}`);
  }

  obterPorId(id: number): Observable<Venda> {
    return this.http.get<Venda>(`${this.api}/buscar/${id}`);
  }

  criar(data: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.api + '/criar', data);
  }
}
