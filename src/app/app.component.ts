import { Component } from '@angular/core'; //profersor não esqueça de instalar o angular core (npm install @angular/core).
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <div class="container">
      <h1>Calculadora de IMC</h1>
      <div class="input-group">
        <label>Peso (kg):</label>
        <input type="number" [(ngModel)]="peso" />
      </div>
      <div class="input-group">
        <label>Altura (m):</label>
        <input type="number" [(ngModel)]="altura" />
      </div>
      <button (click)="calcularIMC()">Calcular</button>
      <div *ngIf="imc" class="result">
        <h2>Resultado:</h2>
        <p>Seu IMC é: {{ imc }}</p>
        <p>{{ resultado }}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: linear-gradient(135deg, #e3f2fd, #ffffff);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      text-align: center;
      color: #2c3e50;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .input-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #34495e;
    }
    input[type="number"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #dcdcdc;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 14px;
      color: #2c3e50;
    }
    input[type="number"]:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 4px rgba(52, 152, 219, 0.5);
    }
    button {
      background: linear-gradient(135deg, #42a5f5, #1e88e5);
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      display: block;
      margin: 20px auto;
    }
    button:hover {
      background: linear-gradient(135deg, #1e88e5, #1565c0);
    }
    .result {
      margin-top: 20px;
      padding: 15px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      background-color: #f9f9f9;
      text-align: center;
    }
    .result h2 {
      color: #3498db;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .result p {
      color: #2c3e50;
      font-size: 16px;
      margin: 5px 0;
    }
  `]
})
export class AppComponent {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;
  resultado: string = '';

  calcularIMC() {
    if (this.peso !== null && this.altura !== null && this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.imc = parseFloat(this.imc.toFixed(2));
      this.resultado = this.interpretarIMC(this.imc);
    } else {
      this.imc = null;
      this.resultado = 'Por favor, insira peso e altura válidos.';
    }
  }

  interpretarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  }
}
