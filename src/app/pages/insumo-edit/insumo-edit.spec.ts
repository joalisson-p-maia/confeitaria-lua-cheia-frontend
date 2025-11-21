import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoEdit } from './insumo-edit';

describe('InsumoEdit', () => {
  let component: InsumoEdit;
  let fixture: ComponentFixture<InsumoEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsumoEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsumoEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
