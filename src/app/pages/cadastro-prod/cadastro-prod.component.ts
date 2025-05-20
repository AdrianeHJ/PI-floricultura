import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../services/types';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-prod',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-prod.component.html',
  styleUrl: './cadastro-prod.component.css'
})
export class CadastroProdComponent {
  @ViewChild("productForm") productForm!: NgForm;

  titulo = 'Cadastro de Produtos';
  produtoId?: number;

  isSubmitted = false;

  produto: Produto = {} as Produto ;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {

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
    this.isSubmitted = true;
    this.productForm.form.markAllAsTouched();
  
    if (this.produtoId) {
      this.service.editar(this.produto).subscribe({
        next: () => {
          this.router.navigate(['/produtos']);
        },
        error: (err) => {
          alert("Erro ao editar produto: " + err);
          this.router.navigate(['/produtos/alterar/3']);
        }
      });
    } else {
      this.service.incluir(this.produto).subscribe({
        next: () => {
          this.router.navigate(['/produtos']);
        },
        error: (err) => {
          //alert("Erro ao criar produto: " + err);
          this.router.navigate(['/produtos/alterar/3']);
        }
      });
    }
  }

  cancel() {
    this.router.navigate(["/produtos"]);
  }
}



