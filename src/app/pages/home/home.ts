import { ControleInsumo } from './../../components/controle-insumo/controle-insumo';
import { ControleVendas } from './../../components/controle-vendas/controle-vendas';
import { EstoqueControleInsumo } from './../../components/estoque-controle-insumo/estoque-controle-insumo';
import { BalancoParcialMensal } from './../../components/balanco-parcial-mensal/balanco-parcial-mensal';
import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Header,
    RouterModule,
    EstoqueControleInsumo,
    BalancoParcialMensal,
    EstoqueControleInsumo,
    ControleInsumo,
    Footer,
    ControleVendas
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
