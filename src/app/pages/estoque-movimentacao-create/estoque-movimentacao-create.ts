import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstoqueService } from '../../services/estoque';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { InsumosService } from '../../services/insumos';

@Component({
  selector: 'app-estoque-movimentacao-create',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl: './estoque-movimentacao-create.html',
  styleUrl: './estoque-movimentacao-create.scss',
})
export class EstoqueMovimentacaoCreate {
  form = {
    nome: "",
    quantidade: 0,
    tipo: 'entrada'
  };
  listaInsumos: any = [];

  constructor(
    private service: EstoqueService,
    private InsumoService: InsumosService
  ) {}

  ngOnInit(): void {
    this.InsumoService.listar().subscribe({
      next: (res) => {
        console.log(res);

        this.listaInsumos = res;
      }
    });
  }

  salvar() {
    this.service.registrarMovimentacao(this.form).subscribe({
      next: (res) => {
        console.log(res);

        setTimeout(() => {
          window.location.href = "/estoque";
        }, 2000);
      }
    });
  }
}
