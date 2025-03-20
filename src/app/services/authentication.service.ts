import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { TokenService } from './token.service';
import { ResponseLogin } from '@models/authentication.model';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  login(username: string, password: string) {
    return this.http.post<ResponseLogin>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(tap(response => {
        this.tokenService.saveToken(response.accessToken);
      }));
  }

  registerUser(user: User) {
    return this.http.post(`${environment.apiUrl}/user/registration`, user);
  }

  registerAndLogin(user: User) {
    return this.registerUser(user).
      pipe(switchMap(() => this.login(user.email, user.password)));
  }

  logout() {
    this.tokenService.removeToken();
  }
}
