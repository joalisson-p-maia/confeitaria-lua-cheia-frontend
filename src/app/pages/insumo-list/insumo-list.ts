import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsumosService } from '../../services/insumos';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-insumo-list',
  imports: [
    CommonModule,
    RouterModule,
    Header,
    Footer
  ],
  templateUrl: './insumo-list.html',
  styleUrl: './insumo-list.scss',
})
export class InsumoList {
  insumos: any[] = [];

  constructor(private service: InsumosService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(res => {
      console.log(res);
      this.insumos = res
    });
  }
}
