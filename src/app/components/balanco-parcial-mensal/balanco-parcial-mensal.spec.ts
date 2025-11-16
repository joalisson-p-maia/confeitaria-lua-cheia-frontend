import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancoParcialMensal } from './balanco-parcial-mensal';

describe('BalancoParcialMensal', () => {
  let component: BalancoParcialMensal;
  let fixture: ComponentFixture<BalancoParcialMensal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancoParcialMensal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancoParcialMensal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
