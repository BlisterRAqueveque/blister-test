import { Component, inject } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Nombre a la página';

  private readonly primeng = inject(PrimeNG);

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
