import { Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { RedirectGuard } from '@guards/redirect.guard';

import { LoginComponent } from '@modules/auth/pages/login/login.component';
import { RegisterComponent } from '@modules/auth/pages/register/register.component';
import { AuthenticatorLayoutComponent } from '@modules/layout/authenticator-layout/authenticator-layout.component';
import { DashboardComponent } from '@modules/layout/dashboard/dashboard.component';
import { PhonePackagesViewComponent } from '@modules/phone-packages/phone-packages-view/phone-packages-view.component';
import { RechargeViewComponent } from '@modules/recharge/recharge-view/recharge-view.component';
import { DetailTransactionComponent } from '@modules/transaction/detail-transaction/detail-transaction.component';
import { TransactionViewComponent } from '@modules/transaction/transaction-view/transaction-view.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    canActivate: [RedirectGuard],
    component: AuthenticatorLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "registration",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "app",
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: RechargeViewComponent
      },
      {
        path: "transaction",
        component: TransactionViewComponent
      },
      {
        path: "detail-transaction",
        component: DetailTransactionComponent
      },
      {
        path: "phone-packages",
        component: PhonePackagesViewComponent
      },
    ]
  },
];
