import { Component } from '@angular/core';
import { InsumosService } from '../../services/insumos';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insumo-edit',
  imports: [
    CommonModule,
    FormsModule
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
    this.service.editar(this.form.id, this.form).subscribe();
  }
}
