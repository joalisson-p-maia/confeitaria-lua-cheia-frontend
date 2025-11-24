import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../../services/estoque';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estoque-controle-insumo',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './estoque-controle-insumo.html',
  styleUrl: './estoque-controle-insumo.scss',
})
export class EstoqueControleInsumo implements OnInit{
  insumosLista: any = [];

  constructor(
    private readonly service: EstoqueService
  ){}

  ngOnInit(): void {
    this.obterListaEstoque();  
  }

  obterListaEstoque(){
    this.service.obterEstoque().subscribe({
      next: (res) => {
        console.log(res);

        this.insumosLista = res;
        this.validarQuatroInsumosEmBaixa();
      },
    })
  }

  validarQuatroInsumosEmBaixa(){
    const listaConvertida = this.insumosLista.map((item: any) => ({
      ...item,
      quantidadeConvertida: this.converterQuantidade(item)
    }));

    listaConvertida.sort((a: any, b: any) => a.quantidadeConvertida - b.quantidadeConvertida);

    return listaConvertida.slice(0, 4);
  }

  converterQuantidade(item: any): number {
  const quantidade = Number(item.quantidade);
  const unidade = item.unidadeMedida?.toLowerCase();

  switch (unidade) {
    case 'kg':
      return quantidade * 1000;

    case 'l':
      return quantidade * 1000;

    default:
      return quantidade;
  }
}

}
