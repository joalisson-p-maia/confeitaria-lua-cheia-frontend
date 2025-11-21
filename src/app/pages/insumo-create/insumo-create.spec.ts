import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoCreate } from './insumo-create';

describe('InsumoCreate', () => {
  let component: InsumoCreate;
  let fixture: ComponentFixture<InsumoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsumoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsumoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
