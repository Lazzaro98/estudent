import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servis:UserService, private router:Router, private route:ActivatedRoute) { }

  uspesnoRegistrovan:Boolean
  greskaPriRegistraciji:Boolean;

  usernameZauzet:Boolean;
  neispravanIndeks:Boolean;
  obaveznaPoljaS:Boolean;
  obaveznaPoljaZ:Boolean;
user:User;
logged:Boolean;
  ngOnInit(): void {
    this.logged=false;
    this.uspesnoRegistrovan=false;
    this.greskaPriRegistraciji=false;
    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user'));
      this.logged=true;
    }
    this.dohvatiKorisnike();
    this.indeksS="";

    this.usernameZ="";
    this.passwordZ="";
    this.nameZ="";
    this.surnameZ="";
    this.mailZ="";
    this.numberZ="";
    this.websiteZ="";
    this.bioZ="";
    this.zvanjeZ="";
    this.classnumZ=0;
    this.statusZ="";

    this.usernameS="";
    this.passwordS="";
    this.nameS="";
    this.surnameZ="";
    this.indeksS="";
    this.tipStudijaS="";
    this.statusS="";
  }

  usernameZ:string;
  passwordZ:string;
  nameZ:string;
  surnameZ:string;
  mailZ:string;
  numberZ:string;
  websiteZ:string;
  bioZ:string;
  zvanjeZ:string;
  classnumZ:number;
  statusZ:string;

  usernameS:string;
  passwordS:string;
  nameS:string;
  surnameS:string;
  indeksS:string;
  tipStudijaS:string;
  statusS:string;


  validateIndex(){
    if(this.indeksS.length==9){
    if(this.indeksS[0] >= '0' && this.indeksS[0] <='9'
    && this.indeksS[1] >= '0' && this.indeksS[1] <='9'
    && this.indeksS[2] >= '0' && this.indeksS[2] <='9'
    && this.indeksS[3] >= '0' && this.indeksS[3] <='9'
    && this.indeksS[4] =='/' 
    && this.indeksS[5] >= '0' && this.indeksS[5] <='9'
    && this.indeksS[6] >= '0' && this.indeksS[6] <='9'
    && this.indeksS[7] >= '0' && this.indeksS[7] <='9'
    && this.indeksS[8] >= '0' && this.indeksS[8] <='9' ) return true;}
    return false;
  }

  sviUseri:User[]=[];
  dohvatiKorisnike(){
    this.servis.users().subscribe((data:User[])=>{
      this.sviUseri=data;
      //alert(data);
     
      })
  }

  validateUsernameS(){
    var found=false;
      for(let i=0;i<this.sviUseri.length;i++){
        if(this.sviUseri[i].username==this.usernameS) {
          found=true;
        }
    }
  return !found;
}
validateUsernameZ(){
  var found = false;
  for(let i=0;i<this.sviUseri.length;i++){
    if(this.sviUseri[i].username==this.usernameZ) 
     found= true;
  }
return !found;
}
validateObaveznaPoljaS(){
  if(this.usernameS != "" && this.nameS!="" && this.surnameS!="" && this.passwordS!="") return true;
  return false;
}
validateObaveznaPoljaZ(){
  if(this.usernameZ != "" && this.nameZ!="" && this.surnameZ!="" && this.passwordZ!="" && this.zvanjeZ!="") return true;
  return false;
}

  registerZ(){
    this.obaveznaPoljaZ=false;
    if(this.validateUsernameZ() && this.validateObaveznaPoljaZ()){
    this.servis.registerZ(this.usernameZ,this.passwordZ,this.nameZ,this.surnameZ,
      this.mailZ,this.numberZ,this.websiteZ,this.bioZ,this.zvanjeZ,
      this.classnumZ,this.statusZ).subscribe(ob=>{
        if(ob['user']=='ok'){
          this.uspesnoRegistrovan = true;
          this.greskaPriRegistraciji = false;
          setTimeout(this.preusmeriNaLogin.bind(this),2000);
          //this.preusmeriNaLogin();
        }

      })
    }
    else {
      this.uspesnoRegistrovan = false;
      this.greskaPriRegistraciji = true;
      if(!this.validateUsernameZ()){
        this.usernameZauzet=true;
      }
      if(!this.validateObaveznaPoljaZ()){
        this.obaveznaPoljaZ=true;
      }
    }
  }
  
  registerS(){
    this.neispravanIndeks=false;
    this.usernameZauzet=false;
    this.obaveznaPoljaS=false;
    if(this.validateIndex() && this.validateUsernameS() && this.validateObaveznaPoljaS()){
    this.servis.registerS(this.usernameS,this.passwordS,this.nameS,this.surnameS,
      this.indeksS,this.tipStudijaS,this.statusS).subscribe(ob=>{
        if(ob['user']=='ok'){
          this.uspesnoRegistrovan = true;
          this.greskaPriRegistraciji = false;
          //this.preusmeriNaLogin();
          setTimeout(this.preusmeriNaLogin.bind(this),2000);
        }
        else {
          this.uspesnoRegistrovan = false;
          this.greskaPriRegistraciji = true;

          if(!this.validateUsernameS()){
            this.usernameZauzet=true;
          }
          if(!this.validateIndex()){
            this.neispravanIndeks=true;
          }
          if(!this.validateObaveznaPoljaS()){
            this.obaveznaPoljaS=true;
          }
        }
      })
    }
    else{
          this.uspesnoRegistrovan = false;
          this.greskaPriRegistraciji = true;
          if(!this.validateUsernameS()){
            this.usernameZauzet=true;
          }
          if(!this.validateIndex()){
            this.neispravanIndeks=true;
          }
    }
  }

  preusmeriNaLogin(){
    this.router.navigate(['../login'], {relativeTo: this.route});
  }

}
