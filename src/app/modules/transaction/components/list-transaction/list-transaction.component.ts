import { Component, EventEmitter, inject, Output } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { IconButtonComponent } from "../../../shared/icon-button/icon-button.component";
import { RechargeService } from '@services/recharge.service';
import { TransactionProviderService } from '../../../../providers/transaction-provider.service';
import { CommonModule } from '@angular/common';
import { Transaction } from '@models/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-transactions',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.scss'
})
export class ListTransactionComponent {
  transactionProviderService = inject(TransactionProviderService);
  rechargeService = inject(RechargeService);
  router = inject(Router);

  showIcon = faEye;

  handleShowTransaction(transaction: Transaction){
    this.transactionProviderService.setSelectedTransaction(transaction);
    this.router.navigate(['/app/detail-transaction']);
  }
}
