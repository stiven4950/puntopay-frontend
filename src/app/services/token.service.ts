import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import {JwtPayload, jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    setCookie('token-puntopay', token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie('token-puntopay');
    return token;
  }

  removeToken() {
    removeCookie("token-puntopay");
  }

  /* saveRefreshToken(token: string) {
    setCookie('refresh-token-puntopay', token, { expires: 365, path: '/' });
  }

  getRefreshToken() {
    const token = getCookie('refresh-token-puntopay');
    return token;
  }

  removeRefreshToken() {
    removeCookie("refresh-token-puntopay");
  } */

  isValidToken (){
    const token = this.getToken();
    if(!token) {
      return false;
    }

    const decodeToken = jwtDecode<JwtPayload>(token);
    if(decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }

    return false;
  }

  /* isValidRefreshToken (){
    const token = this.getRefreshToken();
    if(!token) {
      return false;
    }

    const decodeToken = jwtDecode<JwtPayload>(token);
    if(decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }

    return false;
  } */
}
