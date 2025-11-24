import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendasService } from '../../services/vendas';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { EncomendasService } from '../../services/encomendas';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-venda-create',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    RouterLink
],
  templateUrl: './venda-create.html',
  styleUrl: './venda-create.scss',
})
export class VendaCreate implements OnInit{
  encomendasLista: any = [];

  form = {
    encomendaId: 0,
    quantidade: 0,
    data: new Date().toISOString(),
    total: 0
  };

  constructor(
    private service: VendasService,
    private encomendaService: EncomendasService
  ) {}

  ngOnInit(){
    this.listarEncomendas();
  }

  salvar() {
    this.service.criar(this.form).subscribe({
      next: (res) => {
        console.log(res);

        setTimeout(() => {
          window.location.href = "/vendas";
        }, 2000);
      }
    });
  }

  listarEncomendas(){
    this.encomendaService.listar().subscribe({
      next: (res) => {
        console.log(res);
        this.encomendasLista = res;
      }
    })
  }
}
