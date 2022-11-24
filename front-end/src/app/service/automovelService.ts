import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutomovelService {
    constructor(private httpClient: HttpClient) { }

    getByArea(area: number): Observable<any[]> {
        return this.httpClient.get<any[]>(`http://localhost:8080/saemovel/automovel/${area}`);
    }
}