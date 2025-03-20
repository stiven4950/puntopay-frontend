import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePackagesViewComponent } from './phone-packages-view.component';

describe('PhonePackagesViewComponent', () => {
  let component: PhonePackagesViewComponent;
  let fixture: ComponentFixture<PhonePackagesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonePackagesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonePackagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
