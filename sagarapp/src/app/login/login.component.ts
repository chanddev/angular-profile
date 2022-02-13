import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isTransition:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  fnSignUp(event:any){
    this.isTransition=1;

  }

  fnSignIn(event:any){
    this.isTransition=0;

  }

}
