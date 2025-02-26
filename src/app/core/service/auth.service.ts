import { Login } from '@/app/models';
import { CustomResponse } from '@/app/models/interfaces/auth.interface';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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
        ignoreElements();
      })
    );
  }

  private saveTokenInCookies(data: string) {
    // TODO guardar token en las cookies
  }

  logout() {}
}
