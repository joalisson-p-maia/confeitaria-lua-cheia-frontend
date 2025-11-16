import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleInsumo } from './controle-insumo';

describe('ControleInsumo', () => {
  let component: ControleInsumo;
  let fixture: ComponentFixture<ControleInsumo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleInsumo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleInsumo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
