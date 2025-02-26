import { Component, Input, model, ModelSignal } from '@angular/core';

export type InputType = 'password' | 'text' | 'number' | 'email';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() tipoDeValor!: InputType;
  isPassword: boolean = false;

  value: ModelSignal<any> = model();

  togglePassword() {
    switch (this.tipoDeValor) {
      case 'password':
        this.tipoDeValor = 'text';
        break;
      case 'text':
        this.tipoDeValor = 'password';
        break;
      default:
        return;
    }
  }

  ngOnInit() {
    this.isPassword = this.tipoDeValor == 'password';
  }
  
  ngAfterViewInit() {}
  ngOnDestroy() {}
}
