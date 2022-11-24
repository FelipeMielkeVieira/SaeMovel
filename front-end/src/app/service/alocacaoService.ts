import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlocacaoService {
    constructor(private httpClient: HttpClient) { }

    getDisposicao(area: number): Observable<any> {
        return this.httpClient.get<any>(`http://localhost:8080/saemovel/alocacao/${area}`);
    }

    getByAreaAndConcessionariaAndAutomovel(param: HttpParams): Observable<any> {
        return this.httpClient.get<any>(`http://localhost:8080/saemovel/alocacao`, { params: param });
    }

    putAlocacao(id: number, alocacao: Object): Observable<any> {
        return this.httpClient.put<any>(`http://localhost:8080/saemovel/alocacao/${id}`, alocacao, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    }
}