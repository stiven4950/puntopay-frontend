import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '@models/transaction.model';
import { TransactionProviderService } from '@providers/transaction-provider.service';

@Component({
  selector: 'app-detail-transaction',
  standalone: true,
  imports: [],
  templateUrl: './detail-transaction.component.html',
  styleUrl: './detail-transaction.component.css'
})
export class DetailTransactionComponent {
  transactionProviderService = inject(TransactionProviderService);
  router = inject(Router);

  ngOnInit(){
    if(this.transactionProviderService.getSelectedTransaction() == null) {
      this.router.navigate(['/app/transaction']);
    }
  }

  get transaction() {
    return this.transactionProviderService.getSelectedTransaction();
  }

  get ticket() {
    return this.transaction?.ticket;
  }

  get ticketDetail() {
    return this.ticket?.body;
  }
}
