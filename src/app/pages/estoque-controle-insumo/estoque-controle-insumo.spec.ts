import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueControleInsumo } from './estoque-controle-insumo';

describe('EstoqueControleInsumo', () => {
  let component: EstoqueControleInsumo;
  let fixture: ComponentFixture<EstoqueControleInsumo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueControleInsumo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueControleInsumo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
