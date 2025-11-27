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

  encomendaSelecionada: string = ''; 
  quantidade: number = 1;         
  cliente: string = '';   
  dataVenda: string = new Date().toISOString().substring(0, 10);
  totalVenda: number = 0;        

  constructor(
    private service: VendasService,
    private encomendaService: EncomendasService
  ) {}

  ngOnInit(){
    this.listarEncomendas();
  }

  salvar() {
    const vendaPayload = {
      itens: [
        {
          encomenda: this.encomendaSelecionada, 
          quantidade: this.quantidade
        }
      ],
     
      cliente: '', 
      
      total: this.totalVenda, 
      dataVenda: this.dataVenda
    };
    
    if (!this.encomendaSelecionada || this.quantidade <= 0 || this.totalVenda <= 0) {
        console.error("Selecione uma encomenda, quantidade e total válidos.");
        return; 
    }

    this.service.criar(vendaPayload).subscribe({
      next: (res) => {
        console.log(res);

        setTimeout(() => {
          window.location.href = "/vendas";
        }, 2000);
      },
      error: (err) => {
        console.log("Erro ao criar venda:", err);
      }
    });
  }

  listarEncomendas(){
    this.encomendaService.listar().subscribe({
      next: (res) => {
        console.log(res);
        this.encomendasLista = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
