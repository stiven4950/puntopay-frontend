import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSelectComponent } from './supplier-select.component';

describe('SupplierSelectComponent', () => {
  let component: SupplierSelectComponent;
  let fixture: ComponentFixture<SupplierSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
