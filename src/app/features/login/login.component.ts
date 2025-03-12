import { AuthService } from '@/app/core/service/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  password!: string;
  username!: string;

  private readonly auth = inject(AuthService);
  login() {
    if (!this.password || !this.username) alert('Faltan parámetros');

    const credentials = {
      username: this.username,
      password: this.password,
    };
    this.auth.login(credentials).subscribe({
      error: (err) => {
        alert('No se pudo logear');
      },
    });
  }
}
