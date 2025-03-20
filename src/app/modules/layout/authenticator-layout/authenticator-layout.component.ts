import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "../../shared/toast/toast.component";
import { ToastProviderService } from '@providers/toast-provider.service';

@Component({
  selector: 'app-authenticator-layout',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './authenticator-layout.component.html',
  styleUrl: './authenticator-layout.component.css'
})
export class AuthenticatorLayoutComponent {
  toasProviderService = inject(ToastProviderService);
}
