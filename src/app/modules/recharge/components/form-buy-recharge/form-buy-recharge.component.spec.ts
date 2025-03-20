import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuyRechargeComponent } from './form-buy-recharge.component';

describe('FormBuyRechargeComponent', () => {
  let component: FormBuyRechargeComponent;
  let fixture: ComponentFixture<FormBuyRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuyRechargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuyRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
