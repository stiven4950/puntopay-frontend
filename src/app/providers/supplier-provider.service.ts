import { Injectable, signal } from '@angular/core';
import { Supplier } from '@models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierProviderService {
  suppliers = signal<Supplier[]>([]);
  filteredSuppliers = signal<Supplier[]>([]);

  setListSuppliers(suppliers: Supplier[]) {
    this.suppliers.set(suppliers);
    this.filteredSuppliers.set(suppliers);
  }
}
