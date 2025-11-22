import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private api = 'http://localhost:3000/api/estoque';

  constructor(private http: HttpClient) {}

  obterEstoque(): Observable<any[]> {
    return this.http.get<any[]>(this.api + '/listar');
  }

  registrarMovimentacao(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/movimentacao`, data);
  }
}
