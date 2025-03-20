import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  logoIcon = faMoneyBill1Wave;
}
