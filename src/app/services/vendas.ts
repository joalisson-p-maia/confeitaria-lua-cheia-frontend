import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda } from '../interfaces/venda.interface';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private api = 'http://localhost:3000/vendas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.api);
  }

  listarPorMes(mes: number, ano: number): Observable<Venda[]> {
    return this.http.get<Venda[]>(`${this.api}?mes=${mes}&ano=${ano}`);
  }

  obterPorId(id: number): Observable<Venda> {
    return this.http.get<Venda>(`${this.api}/${id}`);
  }

  criar(data: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.api, data);
  }
}
