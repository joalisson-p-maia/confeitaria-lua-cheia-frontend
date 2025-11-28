import { Component } from '@angular/core';
import { EncomendasService } from '../../services/encomendas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-encomenda-create',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    RouterModule
  ],
  templateUrl: './encomenda-create.html',
  styleUrl: './encomenda-create.scss',
})
export class EncomendaCreate {
  form = {
    nome: '',
    preco: 0,
    insumos: []
  };

  constructor(private service: EncomendasService) {}

  salvar() {
    this.service.criar(this.form).subscribe({
      next: (res) => {

        setTimeout(() => {
          window.location.href = "/encomendas";
        }, 2000);
      }
    });
  }
}
