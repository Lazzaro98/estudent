import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-promena-sifre-zaposlen',
  templateUrl: './promena-sifre-zaposlen.component.html',
  styleUrls: ['./promena-sifre-zaposlen.component.css']
})
export class PromenaSifreZaposlenComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private userService:UserService) { }
  
  staraSifra:String;
  novaLozinka:String;
  ponovljenaLozinka:String;
  user:User;
  greska:Boolean;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.greska=false;
    
  }

  promeniLozinku(){

    if(this.staraSifra == this.user.password && this.novaLozinka==this.ponovljenaLozinka){
      //alert(1);
      this.user.prvaprijava=0;
      this.preusmeri('../dashboard-zaposleni/welcome-zaposleni');
      this.userService.updateUser(this.user.username,this.novaLozinka,this.user.name,this.user.surname,this.user.mail,this.user.number,this.user.website,this.user.bio,this.user.classnum,0,this.user.predmeti,this.user.image).subscribe((data:User[])=>{
        // alert(1);
       });
    }
    else {
      this.greska=true;
    }
  }


  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }

}
