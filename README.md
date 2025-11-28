# 🍰 Confeitaria Lua Cheia - Frontend  
Frontend desenvolvido em **Angular 20**, responsável pela interface de gestão de insumos, encomendas, vendas e balanço mensal.

---

## 🚀 Tecnologias Utilizadas
- **Angular 20**
- **TypeScript**
- **RxJS**
- **HTML / CSS**
- **Zone.js**
- **Angular Router**

---

## 📂 Estrutura de Rotas

```ts
export const routes: Routes = [
  { path: "", component: Home },
  { path: "home", component: Home },

  { path: "insumos", component: InsumoList },
  { path: "insumos/novo", component: InsumoCreate },
  { path: "insumos/editar/:id", component: InsumoEdit },

  { path: "encomendas", component: EncomendaList },
  { path: "encomendas/novo", component: EncomendaCreate },
  { path: "encomendas/editar/:id", component: EncomendaEdit },

  { path: "estoque", component: Estoque },
  { path: "estoque/movimentacao", component: EstoqueMovimentacaoCreate },

  { path: "vendas", component: VendaList },
  { path: "vendas/novo", component: VendaCreate },

  { path: "balanco", component: Balanco },

  { path: "**", redirectTo: "home", pathMatch: "full" }
];
```

-----
## ▶️ Baixar dependências
#### npm install

-----
## ▶️ Rodar o Servidor de Desenvolvimento
#### npm start


##### Acesse em:
##### 👉 http://localhost:4200