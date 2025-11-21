import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaCreate } from './venda-create';

describe('VendaCreate', () => {
  let component: VendaCreate;
  let fixture: ComponentFixture<VendaCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendaCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendaCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
