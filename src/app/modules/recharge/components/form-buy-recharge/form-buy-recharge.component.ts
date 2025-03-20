import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ButtonComponent } from "../../../shared/button/button.component";
import { SupplierSelectComponent } from "../supplier-select/supplier-select.component";

import { SupplierProviderService } from '@providers/supplier-provider.service';
import { Supplier } from '@models/supplier.model';
import { Recharge } from '@models/recharge.model';
import { RechargeService } from '@services/recharge.service';
import { RequestStatus } from '@models/request-status.model';
import { TransactionProviderService } from '@providers/transaction-provider.service';
import { ToastProviderService } from '@providers/toast-provider.service';

@Component({
  selector: 'form-buy-recharge',
  standalone: true,
  templateUrl: './form-buy-recharge.component.html',
  styleUrls: ['./form-buy-recharge.component.css'],
  imports: [ReactiveFormsModule, ButtonComponent, SupplierSelectComponent]
})
export class FormBuyRechargeComponent {
  supplierProviderService = inject(SupplierProviderService);
  transactionProviderService = inject(TransactionProviderService);
  toastProvider = inject(ToastProviderService);
  rechargeService = inject(RechargeService);
  router = inject(Router);
  formRecharge: FormGroup;
  selectedSupplier?: Supplier;
  status: RequestStatus = 'init';

  constructor(private fb: FormBuilder) {
    this.formRecharge = this.fb.group({
      number: ['',[Validators.required,Validators.pattern(/^3\d{9,}$/)]],
      amount: ['',[Validators.required,Validators.min(1000),Validators.max(100000)]],
    });
  }

  get number() {
    return this.formRecharge.get('number') as FormControl;
  }

  get amount() {
    return this.formRecharge.get('amount') as FormControl;
  }

  get suppliers(){
    return this.supplierProviderService.suppliers();
  }

  submit() {
    if (this.formRecharge.invalid) {
      this.formRecharge.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    let recharge: Recharge = this.formRecharge.getRawValue();
    recharge.productCode = this.selectedSupplier?.supplierCode ?? "";

    this.rechargeService.buy(recharge)
            .subscribe({
              next: (value) => {
                this.status = 'success';
                this.toastProvider.showToast(value.message, 5000);
                this.transactionProviderService.setSelectedTransaction(value.data);
                this.router.navigate(['/app/detail-transaction']);
              },
              error: (e: HttpErrorResponse) => {
                this.toastProvider.showToast("No fue posible hacer la recarga", 5000, "error");
                this.status = 'failed';
              }
            })
  }

  onSupplierChange(supplier: Supplier) {
    this.selectedSupplier = supplier;
  }
}
