import { TestBed } from '@angular/core/testing';

import { Encomendas } from './encomendas';

describe('Encomendas', () => {
  let service: Encomendas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encomendas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
