import { Component, OnInit } from '@angular/core';
import { Produto } from '../../services/types';
import { ProdutoService } from '../../services/produto.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manutencao-prod',
  imports: [RouterLink],
  templateUrl: './manutencao-prod.component.html',
  styleUrl: './manutencao-prod.component.css'
})
export class ManutencaoProdComponent implements OnInit{
    listaprodutos:Produto[] = [];

  constructor(private service:ProdutoService,
              private router: Router
  ){}


  ngOnInit(): void {
    this.service.listar().subscribe((produto)=>{
        this.listaprodutos = produto;
    })
  }

   excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }
}

