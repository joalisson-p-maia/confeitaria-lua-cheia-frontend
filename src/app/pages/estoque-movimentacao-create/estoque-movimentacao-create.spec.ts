import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueMovimentacaoCreate } from './estoque-movimentacao-create';

describe('EstoqueMovimentacaoCreate', () => {
  let component: EstoqueMovimentacaoCreate;
  let fixture: ComponentFixture<EstoqueMovimentacaoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueMovimentacaoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueMovimentacaoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
