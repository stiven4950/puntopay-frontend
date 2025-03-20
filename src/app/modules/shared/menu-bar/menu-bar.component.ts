import { Component, inject } from '@angular/core';
import { ItemNavigationComponent } from './item-navigation/item-navigation.component';
import { faClockRotateLeft, faFileInvoiceDollar, faGear, faRightFromBracket, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ItemButtonComponent } from "./item-button/item-button.component";

import { AuthenticationService } from '@services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-bar',
  standalone: true,
  imports: [FontAwesomeModule, ItemNavigationComponent, ItemButtonComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  profileIcon = faUser;
  buyRechargeIcon = faFileInvoiceDollar;
  rechargeHistoryIcon = faClockRotateLeft;
  rechargeIcon = faTicket;
  configurationIcon = faGear;
  logoutIcon = faRightFromBracket;

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
