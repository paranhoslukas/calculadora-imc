import { Component } from '@angular/core';
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
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    .input-group {
      margin-bottom: 10px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="number"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      display: block;
      margin: 10px auto;
    }

    button:hover {
      background-color: #3e8e41;
    }

    .result {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #fff;
      text-align: center;
    }

    .result h2 {
      color: #337ab7;
    }
  `],
})
export class AppComponent {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;
  resultado: string = '';

  calcularIMC() {
    if (this.peso !== null && this.altura !== null && this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.imc = parseFloat(this.imc.toFixed(2)); // Arredonda para 2 casas decimais
      this.resultado = this.interpretarIMC(this.imc);
    } else {
      this.imc = null;
      this.resultado = 'Por favor, insira peso e altura válidos.';
    }
  }

  interpretarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  }
}
