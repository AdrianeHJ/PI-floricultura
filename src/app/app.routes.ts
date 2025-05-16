import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ManutencaoProdComponent } from './pages/manutencao-prod/manutencao-prod.component';


export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'Jardim Encantado'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'produtos',
        component: ManutencaoProdComponent,
        title: 'Manutenção de Produtos'
    }
];
