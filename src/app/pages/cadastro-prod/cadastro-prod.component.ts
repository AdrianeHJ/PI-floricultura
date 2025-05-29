import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
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

  produto: Produto = {} as Produto;
  todosProdutos: Produto[] = []; 

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoId = Number(this.route.snapshot.params['id']);

   
    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.produto = { ...produto };
        }
      });
    }

 
    service.listar().subscribe(produtos => {
      this.todosProdutos = produtos;
    });
  }

  submeter() {
    this.isSubmitted = true;
    this.productForm.form.markAllAsTouched();

    
    if (this.productForm.invalid) {
      return;
    }

  
    if (!this.produtoId) {
      const idExistente = this.todosProdutos.find(p => p.id === this.produto.id);
      if (idExistente) {
        alert("Já existe um produto com esse ID.");
        return;
      }
    }

   
    if (this.produtoId) {
      this.service.editar(this.produto).subscribe({
        next: () => this.router.navigate(['/produtos']),
        error: (err) => {
          alert("Erro ao editar produto: " + err);
        }
      });
    } else {
     
      this.service.incluir(this.produto).subscribe({
        next: () => this.router.navigate(['/produtos']),
        error: (err) => {
          alert("Erro ao criar produto: " + err);
        }
      });
    }
  }

  cancel() {
    this.router.navigate(["/produtos"]);
  }
}