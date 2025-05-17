import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../services/types';


@Component({
  selector: 'app-cadastro-prod',
  imports: [FormsModule],
  templateUrl: './cadastro-prod.component.html',
  styleUrl: './cadastro-prod.component.css'
})
export class CadastroProdComponent {

  titulo = 'Cadastro de Produtos';
  produtoId?: number;

  //Defino um objeto produto que será incluído ou alterado.
  produto: Produto = {} as Produto;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //Verifico se é alteração ou inclusão
    this.produtoId = Number(this.route.snapshot.params['id']);
    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.produto.id = produto.id;
          this.produto.nome = produto.nome;
          this.produto.quantidade = produto.quantidade;
          this.produto.precounit = produto.precounit;
        }
      })
    }
  }

  submeter() {
    if (this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
    }
  }

   cancel() {
    this.router.navigate(["/produtos"]);
  }
}


