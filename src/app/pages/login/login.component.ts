import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,            // necessário para usar `imports`
  imports: [FormsModule],       // permite [(ngModel)] no template
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  senha: string = '';
  botaoDesabilitado: boolean = true;

  constructor(private router: Router) { }

  onBotaoClicado() {
    if (this.login.trim() && this.senha.trim()) {
      if (this.login === 'admin' && this.senha === 'admin') {
        //alert(`Bem-vindo ${this.login}!`);  // uso correto de template literal
        this.router.navigate(['/produtos']);
      } else {
        alert('Dados inválidos');
        this.router.navigate(['/']);
      }
    } else {
      alert('Preencha ambos os campos!');
    }
  }
}
