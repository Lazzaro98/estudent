import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Obavestenje } from '../model/obavestenje';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-studentska-takmicenja',
  templateUrl: './studentska-takmicenja.component.html',
  styleUrls: ['./studentska-takmicenja.component.css']
})
export class StudentskaTakmicenjaComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserService, private router:Router) { }

  svaObavestenja:Obavestenje[] = [];
  studentskaTakmicenja:Obavestenje[]=[];
  ngOnInit(): void {
    this.dohvatiObavestenja();
  }

  dohvatiObavestenja(){
    this.userService.obavestenja().subscribe((data:Obavestenje[])=>{
      this.svaObavestenja=data;
      for(let i = 0; i < this.svaObavestenja.length; i++){
        if(this.svaObavestenja[i].type==0 && this.zastareo(this.svaObavestenja[i].date)==0){
          this.studentskaTakmicenja.push(this.svaObavestenja[i]);
        }
      }
    })
  }
  vrati(){
      this.router.navigate(['../']);
  }
  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
/*
 zaposleni:User[]=[];
  sviUseri:User[]=[];
  dohvatiZaposlene(){
    this.userService.users().subscribe((data:User[])=>{
      this.sviUseri=data;
      for(let i=0;i<this.sviUseri.length;i++){
        if(this.sviUseri[i].type==1){
          this.zaposleni.push(this.sviUseri[i]);
        }
      }
    })
  }
*/


calculateDiff(dateSent){
  let currentDate = new Date();
  dateSent = new Date(dateSent);

  return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
}

zastareo(datum:String){
  let dan = "", mesec ="", godina="";
          let j = 0;
          while(datum.substr(j,1) !='.'){dan+=datum.substr(j++,1);}
          j++;
          while(datum.substr(j,1) !='.'){mesec+=datum.substr(j++,1);}
          j++;
          while(datum.substr(j,1) !='.'){godina+=datum.substr(j++,1);}
          let datumr = Date.parse(mesec+"/"+dan+"/"+godina);
          let razlika = this.calculateDiff(datum);
          if(razlika > 90) return 1;
          else return 0;
}
}
