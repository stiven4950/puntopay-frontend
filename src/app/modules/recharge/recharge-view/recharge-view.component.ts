import { Component, inject, signal } from '@angular/core';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RechargeService } from '@services/recharge.service';
import { FormBuyRechargeComponent } from '../components/form-buy-recharge/form-buy-recharge.component';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-recharge-view',
  standalone: true,
  imports: [FontAwesomeModule, FormBuyRechargeComponent, BreadcrumbComponent],
  templateUrl: './recharge-view.component.html',
  styleUrl: './recharge-view.component.css'
})
export class RechargeViewComponent {
  private rechargeService = inject(RechargeService);

  addAirplane = faPlane;
  showModal = signal(false);

  ngOnInit() {
    this.rechargeService.getSuppliers().subscribe();
  }
}
