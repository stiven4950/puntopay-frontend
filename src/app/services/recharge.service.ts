import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';
import { Transaction } from '@models/transaction.model';
import { Recharge } from '@models/recharge.model';
import { ResponseTransaction } from '@models/response-transaction.model';
import { TransactionProviderService } from '../providers/transaction-provider.service';
import { Supplier } from '@models/supplier.model';
import { SupplierProviderService } from '../providers/supplier-provider.service';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {
  private http = inject(HttpClient);
  private transactionProviderService = inject(TransactionProviderService);
  private supplierProviderService = inject(SupplierProviderService);

  getSuppliers() {
    return this.http.get<Supplier[]>(environment.apiUrl + "/recharge/suppliers", { context: checkToken() }).pipe(tap(value=> {
      this.supplierProviderService.setListSuppliers(value);
    }))
  }

  getTransactions() {
    return this.http.get<Transaction[]>(environment.apiUrl + "/transactions", { context: checkToken() }).pipe(tap(value=> {
      this.transactionProviderService.setListTransactions(value);
    }))
  }

  buy(recharge: Recharge) {
    return this.http.post<ResponseTransaction>(environment.apiUrl + "/recharge/buy", recharge, { context: checkToken() });
  }
}
