import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';
import {ActivatedRoute} from '@angular/router'
var slajd=new Array;
var slajd_len;



function promena(t){
	document.getElementById("slide_show").style.backgroundImage = "url("+slajd[t]+")";
	if(t<slajd_len)
		t++;
	else t=0;
	window.setTimeout(function(){promena(t)},2500);
}
function setslideshow(){
  var img=new Image();
  img.src="assets/etfslike/slika1.jpg";
	slajd[0]=img.src;
  img.src="assets/etfslike/slika2.jpg";
	slajd[1]=img.src;
  img.src="assets/etfslike/slika3.jpg";
	slajd[2]=img.src;
	slajd_len=slajd.length-1;
	promena(0);
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserService, private router:Router) { 
  }

  ngOnInit(): void {
    setslideshow();
    if(localStorage.getItem('user')){this.isLoggedIn=true;}
    else this.isLoggedIn=false;
    this.greskaPriLogovanju=false;
  }

  username:string;
  password:string;
  isLoggedIn:boolean;
  greskaPriLogovanju:Boolean;
  login(){
    this.userService.login(this.username,this.password).subscribe((user:User)=>{
      //alert(1);
      if(user){
        this.greskaPriLogovanju=false;
        localStorage.setItem('user',JSON.stringify(user));
        if(user.type==1 && user.prvaprijava==0){
          this.router.navigate(['dashboard-zaposleni/welcome-zaposleni']);
        }
        else if (user.type==2 && user.prvaprijava==1)this.router.navigate(['promena-sifre-student']);
        else if(user.type==1 && user.prvaprijava==1) this.router.navigate(['promena-sifre-zaposlen']);
        else if (user.type==2 && user.prvaprijava==0)this.router.navigate(['dashboard-student/welcome-student']);
        else if (user.type==0)this.router.navigate(['dashboard-admin']);
        localStorage.setItem('loggedIn',JSON.stringify(user));
        this.isLoggedIn=true;
      }
      else {
        //alert("Bad data.");
        this.greskaPriLogovanju=true;
      }
    })
  }
  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }

}
