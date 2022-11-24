import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConcessionariaService {
    constructor(private httpClient: HttpClient) { }

    getByAreaAndAutomovel(params: HttpParams): Observable<any[]> {
        return this.httpClient.get<any[]>(`http://localhost:8080/saemovel/concessionaria`, { params: params });
    }
}