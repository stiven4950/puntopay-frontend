import { Injectable, signal } from '@angular/core';
import { Transaction } from '@models/transaction.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionProviderService {
  private selectedTransactionSubject = new BehaviorSubject<Transaction | null>(null);
  selectedTransaction$ = this.selectedTransactionSubject.asObservable();

  transactions = signal<Transaction[]>([]);
  filteredTransactions = signal<Transaction[]>([]);

  setListTransactions(transactions: Transaction[]) {
    this.transactions.set(transactions);
    this.filteredTransactions.set(transactions);
  }

  setSelectedTransaction(transaction: Transaction | null) {
    this.selectedTransactionSubject.next(transaction);
  }

  getSelectedTransaction() {
    return this.selectedTransactionSubject.getValue();
  }

  addTransaction(transaction: Transaction) {
    this.transactions.update((state) => [...state, transaction]);
    this.filteredTransactions.update((state) => [...state, transaction]);
  }

  searchTransactionByPhoneNumber(text: string) {
    if (!text) {
      this.filteredTransactions.set(this.transactions());
    }

    const newList = this.transactions().filter(transaction => transaction?.ticket?.body?.Numero.includes(text));
    this.filteredTransactions.set(newList);
  }
}
