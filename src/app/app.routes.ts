import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { IniciarSessao } from './pages/iniciar-sessao/iniciar-sessao';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "iniciar-sessao",
        component: IniciarSessao
    },
    {
        path: "cadastro",
        component: Cadastro
    }
];
