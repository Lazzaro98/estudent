import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private router:Router,public translate: TranslateService
    ) { 
    translate.addLangs(['en', 'sr', 'sr-c']);
    translate.setDefaultLang('en');
  }
  user:User;
  username:String;
  ulogovan:Boolean;
  ngOnInit(): void {
    this.username = "";
    this.ulogovan=false;
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
      this.username=this.user.username;
      this.ulogovan=true;
    }
  }
  odjava(){
    localStorage.clear();
    this.ulogovan=false;
    this.username="";
    this.router.navigate(['dashboard-neregistrovani/login']);
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
 
}
