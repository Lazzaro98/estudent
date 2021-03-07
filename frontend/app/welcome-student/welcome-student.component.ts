import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-welcome-student',
  templateUrl: './welcome-student.component.html',
  styleUrls: ['./welcome-student.component.css']
})
export class WelcomeStudentComponent implements OnInit {

  constructor() { }
  user:User;
  ngOnInit(): void {
    if(localStorage.getItem('user')){this.user = JSON.parse(localStorage.getItem('user'));}
  }

}
