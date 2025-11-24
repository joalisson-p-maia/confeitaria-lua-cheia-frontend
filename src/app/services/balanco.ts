import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalancoService {

  private api = 'https://confeitaria-lua-cheia-backend.onrender.com/api/balanco';

  constructor(private http: HttpClient) {}

  obterBalanco(mes?: number, ano?: number): Observable<any> {
    let params = new HttpParams();

    if (mes !== undefined) params = params.set('mes', mes);
    if (ano !== undefined) params = params.set('ano', ano);

    return this.http.get<any>(this.api, { params });
  }

}
