import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produto';

  constructor(private http:HttpClient) { }

  listar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API);
  }

  incluir(Produto:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.API, Produto)
  }
  editar(produto: Produto): Observable<Produto> {
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }
  buscarPorId(id: number): Observable<Produto | undefined> {
    return this.http.get<Produto>(this.API + `/${id}`);
  }

  excluir(id: number): Observable<Produto> {
    return this.http.delete<Produto>(this.API + `/${id}`);
  }
}