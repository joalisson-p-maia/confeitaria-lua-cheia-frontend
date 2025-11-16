import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVendas } from './controle-vendas';

describe('ControleVendas', () => {
  let component: ControleVendas;
  let fixture: ComponentFixture<ControleVendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleVendas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleVendas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
