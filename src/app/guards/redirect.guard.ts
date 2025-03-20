import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  private tokenService = inject(TokenService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.tokenService.isValidToken()) {
      if (this.router.url !== '/app') {
        this.router.navigate(['/app']);
      }
      return false;
    }

    return true;
  }
}
