import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EncomendasService } from '../../services/encomendas';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-encomenda-edit',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl: './encomenda-edit.html',
  styleUrl: './encomenda-edit.scss',
})
export class EncomendaEdit {
    form: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: EncomendasService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.obterPorId(id).subscribe(res => this.form = res);
  }

  salvar() {
    this.service.editar(this.form.id, this.form).subscribe();
  }
}
