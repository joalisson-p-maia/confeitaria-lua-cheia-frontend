import { Component } from '@angular/core';
import { EncomendasService } from '../../services/encomendas';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-encomenda-list',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl: './encomenda-list.html',
  styleUrl: './encomenda-list.scss',
})
export class EncomendaList {
  lista: any[] = [];

  constructor(private service: EncomendasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (res) => {
        this.lista = res;
      }
    });
  }
}
