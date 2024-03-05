import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
   num01: number = 0;
   num02: number = 0;
   somar: number = 0;
   subtrair: number = 0;
   multiplicar: number = 0;
   dividir: number = 0;

   calc01(){
     this.somar = this.num01 + this.num02;
   }

   calc02(){
    this.subtrair = this.num01 - this.num02;
   }

   calc03(){
    this.multiplicar = this.num01 * this.num02;
   }

   calc04(){
    this.dividir = this.num01 / this.num02;
   }
}