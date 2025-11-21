import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Balanco } from './balanco';

describe('Balanco', () => {
  let component: Balanco;
  let fixture: ComponentFixture<Balanco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Balanco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Balanco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
