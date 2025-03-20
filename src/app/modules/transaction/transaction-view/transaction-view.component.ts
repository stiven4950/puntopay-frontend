import { Component, inject, signal } from '@angular/core';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from "../../shared/search-bar/search-bar.component";

import { RechargeService } from '@services/recharge.service';
import { ListTransactionComponent } from '../components/list-transaction/list-transaction.component';
import { TransactionProviderService } from '@providers/transaction-provider.service';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-transaction-view',
  standalone: true,
  imports: [FontAwesomeModule, ListTransactionComponent, SearchBarComponent, BreadcrumbComponent],
  templateUrl: './transaction-view.component.html',
  styleUrl: './transaction-view.component.scss'
})
export class TransactionViewComponent {
  rechargeService = inject(RechargeService);
  transactionProviderService = inject(TransactionProviderService);

  addAirplane = faPlane;
  showModal = signal(false);

  ngOnInit(){
    this.rechargeService.getTransactions().subscribe();
  }

  handleSearch(text: string) {
    this.transactionProviderService.searchTransactionByPhoneNumber(text);
  }
}
