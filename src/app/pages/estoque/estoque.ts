import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EstoqueService } from '../../services/estoque';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estoque',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    RouterModule
  ],
  templateUrl: './estoque.html',
  styleUrl: './estoque.scss',
})
export class Estoque {
  lista: any[] = [];

  constructor(private service: EstoqueService) {}

  ngOnInit(): void {
    this.service.obterEstoque().subscribe({
      next: (res) => {
        console.log(res);

        this.lista = res;
      }
    });
  }
}
