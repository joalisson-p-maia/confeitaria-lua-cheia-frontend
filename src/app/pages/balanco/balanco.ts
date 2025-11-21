import { Component } from '@angular/core';
import { BalancoService } from '../../services/balanco';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-balanco',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl: './balanco.html',
  styleUrl: './balanco.scss',
})
export class Balanco {
  mes = 0;
  ano = 0;
  resultado: any = null;

  constructor(private service: BalancoService) {}

  pesquisar() {
    this.service.obterBalanco(this.mes, this.ano)
      .subscribe(r => this.resultado = r);
  }
}
