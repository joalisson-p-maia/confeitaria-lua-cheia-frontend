import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendasService } from '../../services/vendas';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-venda-create',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl: './venda-create.html',
  styleUrl: './venda-create.scss',
})
export class VendaCreate {

  form = {
    encomendaId: 0,
    quantidade: 0,
    data: new Date().toISOString(),
    total: 0
  };

  constructor(private service: VendasService) {}

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
}
