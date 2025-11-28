import { Component, OnInit } from '@angular/core';
import { BalancoService } from '../../services/balanco';

@Component({
  selector: 'app-balanco-parcial-mensal',
  imports: [],
  templateUrl: './balanco-parcial-mensal.html',
  styleUrl: './balanco-parcial-mensal.scss',
})
export class BalancoParcialMensal implements OnInit{
  custoTotal: number = 0;
  totalVendas: number = 0;

  constructor(
    private readonly service: BalancoService
  ){}

  ngOnInit(): void {
    this.buscarBalanco();
  }

  buscarBalanco() {
    this.service.obterBalanco().subscribe({
      next: (res) => {
        console.log(res.total);
        console.log(res.custoTotal);

        this.totalVendas = res.total;
        this.custoTotal = res.custoTotal;
      }
    });
  }
}
