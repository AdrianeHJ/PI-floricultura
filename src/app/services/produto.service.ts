import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produto';

  constructor(private http:HttpClient) { }

  listar():Observable<produto[]>{
    return this.http.get<produto[]>(this.API);
  }

  incluir(produto:produto):Observable<produto>{
    return this.http.post<produto>(this.API, produto)
  }
}

