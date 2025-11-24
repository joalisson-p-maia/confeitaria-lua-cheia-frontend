import { Component } from '@angular/core';
import { InsumosService } from '../../services/insumos';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-insumo-edit',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    RouterLink
],
  templateUrl: './insumo-edit.html',
  styleUrl: './insumo-edit.scss',
})
export class InsumoEdit {
  form: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: InsumosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.obterPorId(id).subscribe(res => this.form = res);
  }

  salvar() {
    this.service.editar(this.form.id, this.form).subscribe({
      next: (res) => {
        console.log(res);

        setTimeout(() => {
          window.location.href = "/insumos";
        }, 2000);
      }
    });
  }
}
