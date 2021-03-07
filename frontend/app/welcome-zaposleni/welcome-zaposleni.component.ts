import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-welcome-zaposleni',
  templateUrl: './welcome-zaposleni.component.html',
  styleUrls: ['./welcome-zaposleni.component.css']
})
export class WelcomeZaposleniComponent implements OnInit {

  constructor() { }
  user:User;
  ngOnInit(): void {
    if(localStorage.getItem('user')){this.user = JSON.parse(localStorage.getItem('user'));}
  }

}
