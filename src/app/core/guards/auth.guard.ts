import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);

  const token = cookieService.get('x-token');

  return token ? true : false;
};
