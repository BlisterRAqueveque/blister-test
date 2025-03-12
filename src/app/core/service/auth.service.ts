import { Login } from '@/app/models';
import { CustomResponse } from '@/app/models/interfaces/auth.interface';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, ignoreElements, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.url;

  login(credentials: Login) {
    return this.http.post<CustomResponse>(this.apiUrl, credentials).pipe(
      catchError((err) => {
        console.error(err);
        throw new Error(err);
      }),
      map((data) => {
        return data.text;
      }),
      tap((data) => {
        this.saveTokenInCookies(data);
        this.router.navigate(['home']);
        ignoreElements();
      })
    );
  }

  private readonly cookieService = inject(CookieService);
  private saveTokenInCookies(data: string) {
    // Le damos un tiempo de uso, en 2 horas se revoca el token
    const now = Date.now();
    const expireAtMls = now + 120 * 60 * 1000;
    const expireAt = new Date(expireAtMls); // => aca
    this.cookieService.set('x-token', data, expireAt, '/');
    // localStorage.setItem('x-token', data);
  }

  private readonly router = inject(Router);
  logout() {
    this.removeTokenFromCookies();
    this.router.navigate(['/login']);
  }

  private removeTokenFromCookies() {
    this.cookieService.set('x-token', '', undefined, '/');
    this.cookieService.delete('x-token');
  }
}
