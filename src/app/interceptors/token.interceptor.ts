import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpContextToken, HttpContext } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '@services/token.service';

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const TokenInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const tokenService = inject(TokenService);

  if (request.context.get(CHECK_TOKEN)) {
    const isValidToken = tokenService.isValidToken();
    if (isValidToken) {
      return addToken(request, next, tokenService);
    }
  }
  return next(request);
};

function addToken(request: HttpRequest<unknown>, next: HttpHandlerFn, tokenService: TokenService) {
  const accessToken = tokenService.getToken();
  if (accessToken) {
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });
    return next(authRequest);
  }
  return next(request);
}
