import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../services/vendas';

@Component({
  selector: 'app-controle-vendas',
  imports: [],
  templateUrl: './controle-vendas.html',
  styleUrl: './controle-vendas.scss',
})
export class ControleVendas implements OnInit{
  quantidadeVendaMes: number = 0;
  valorTotalVendas: number = 0;

  ngOnInit(): void {
    this.listarQuantidadeVendasMes();
  }

  constructor(
    private readonly service: VendasService
  ){}

  listarQuantidadeVendasMes(){
    const mesAtual = new Date().getMonth() + 1;
    const anoAtual = new Date().getFullYear();

    this.service.listarPorMes(mesAtual, anoAtual).subscribe({
      next: (res) => {
        console.log(res);
        this.quantidadeVendaMes = res.length;
      }
    });

    this.service.listar().subscribe({
      next: (res) => {
        const total = res.reduce((acc: number, venda: any) => {
          return acc + Number(venda.total);
        }, 0);

        this.valorTotalVendas = total; 
      }
    });
  }
}
