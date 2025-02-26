import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  password!: string;
  username!: string;

  login() {
    console.log({ username: this.username, password: this.password });
  }
}
