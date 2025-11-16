import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Introducao } from '../../components/introducao/introducao';
import { Catalogo } from '../catalogo/catalogo';
import { EstoqueControleInsumo } from '../estoque-controle-insumo/estoque-controle-insumo';
import { BalancoParcialMensal } from '../balanco-parcial-mensal/balanco-parcial-mensal';
import { ControleInsumo } from '../controle-insumo/controle-insumo';
import { Footer } from '../../shared/footer/footer';
import { ControleVendas } from '../../components/controle-vendas/controle-vendas';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Header,
    RouterModule,
    Catalogo,
    EstoqueControleInsumo,
    BalancoParcialMensal,
    ControleInsumo,
    Footer,
    ControleVendas
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
