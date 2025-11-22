import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { InsumoList } from './pages/insumo-list/insumo-list';
import { InsumoCreate } from './pages/insumo-create/insumo-create';
import { EncomendaList } from './pages/encomenda-list/encomenda-list';
import { EncomendaCreate } from './pages/encomenda-create/encomenda-create';
import { EncomendaEdit } from './pages/encomenda-edit/encomenda-edit';
import { Estoque } from './pages/estoque/estoque';
import { EstoqueMovimentacaoCreate } from './pages/estoque-movimentacao-create/estoque-movimentacao-create';
import { VendaList } from './pages/venda-list/venda-list';
import { VendaCreate } from './pages/venda-create/venda-create';
import { Balanco } from './pages/balanco/balanco';
import { InsumoEdit } from './pages/insumo-edit/insumo-edit';

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
        path: 'insumos', 
        component: InsumoList 
    },
    { 
        path: 'insumos/novo', 
        component: InsumoCreate 
    },
    { 
        path: 'insumos/editar/:id', 
        component: InsumoEdit 
    },
    { 
        path: 'encomendas', 
        component: EncomendaList 
    },
    { 
        path: 'encomendas/novo', 
        component: EncomendaCreate 
    },
    { 
        path: 'encomendas/editar/:id', 
        component: EncomendaEdit 
    },
    { 
        path: 'estoque', 
        component: Estoque 
    },
    { 
        path: 'estoque/movimentacao', 
        component: EstoqueMovimentacaoCreate 
    },
    {
        path: 'vendas', 
        component: VendaList 
    },
    { 
        path: 'vendas/novo', 
        component: VendaCreate 
    },
    { 
        path: 'balanco', 
        component: Balanco 
    },
    { 
        path: '**', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    }
];
