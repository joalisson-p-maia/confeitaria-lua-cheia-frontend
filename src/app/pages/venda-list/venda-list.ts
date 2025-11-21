import { Component } from '@angular/core';
import { VendasService } from '../../services/vendas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-venda-list',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    RouterModule
  ],
  templateUrl: './venda-list.html',
  styleUrl: './venda-list.scss',
})
export class VendaList {
  vendas: any[] = [];

  constructor(private service: VendasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(r => this.vendas = r);
  }
}
