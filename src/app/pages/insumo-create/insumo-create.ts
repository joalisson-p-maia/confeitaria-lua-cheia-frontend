import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsumosService } from '../../services/insumos';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-insumo-create',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl: './insumo-create.html',
  styleUrl: './insumo-create.scss',
})
export class InsumoCreate {
  form = {
    nome: '',
    quantidade: 0,
    unidade: '',
    preco: 0
  };

  constructor(private service: InsumosService) {}

  salvar() {
    this.service.criar(this.form).subscribe();
  }
}
