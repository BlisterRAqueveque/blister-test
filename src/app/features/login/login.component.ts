import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  test(event: any) {
    console.log(event);
    console.log(typeof event);
  }
  password!: string;
  username!: string;

  login() {
    console.log({ username: this.username, password: this.password });
  }
}
