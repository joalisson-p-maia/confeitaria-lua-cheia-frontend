import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaList } from './encomenda-list';

describe('EncomendaList', () => {
  let component: EncomendaList;
  let fixture: ComponentFixture<EncomendaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncomendaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncomendaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
