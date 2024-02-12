import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userNameTyped:boolean=false;
  userAgeTyped:boolean=false;
  userEmailTyped:boolean=false;
  userPasswordTyped:boolean=false;
}
