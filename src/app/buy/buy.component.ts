import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  isValid= true;
  function =(event:Event)=> {
    const input =event.target as HTMLInputElement;
    this.isValid=input.value.includes('@')
    
  }
  onPay=(formBody:NgForm)=>{
    alert('Payment done Successfully ❤️')
  }
}
