import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaEdit } from './encomenda-edit';

describe('EncomendaEdit', () => {
  let component: EncomendaEdit;
  let fixture: ComponentFixture<EncomendaEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncomendaEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncomendaEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
