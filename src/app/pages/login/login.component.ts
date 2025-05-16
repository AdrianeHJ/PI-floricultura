import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  login: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  logar() {
    if (this.login === 'admin@123' && this.senha === 'admin@123') {
      this.router.navigate(['/produtos']);
    } else {
      this.router.navigate(['/']);
      // ou exiba mensagem:
      // alert('Usuário ou senha incorretos');
    }
  }
}
