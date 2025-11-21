import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalancoService {

  private api = 'http://localhost:3000/balanco';

  constructor(private http: HttpClient) {}

  obterBalanco(mes: number, ano: number): Observable<any> {
    return this.http.get<any>(`${this.api}?mes=${mes}&ano=${ano}`);
  }
}
