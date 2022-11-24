import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>(`http://localhost:8080/saemovel/cliente`);
    }
}