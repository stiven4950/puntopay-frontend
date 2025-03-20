import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Supplier } from '@models/supplier.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-select',
  standalone: true,
  imports: [FormsModule, NgSelectModule],
  templateUrl: './supplier-select.component.html',
  styleUrls: ['./supplier-select.component.css']
})
export class SupplierSelectComponent {
  @Input() suppliers: Supplier[] = [];
  @Input() selectedSupplier?: Supplier;
  @Output() supplierChange = new EventEmitter<Supplier>();

  onSelect(supplier: Supplier) {
    this.supplierChange.emit(supplier);
  }
}
