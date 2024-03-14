import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
isValid= true;
function =(event:Event)=> {
  const input =event.target as HTMLInputElement;
  this.isValid=input.value.includes('@')
  
}
onPay=(formBody:NgForm)=>{
  alert('Payment done Successfully ❤️')
}
}
