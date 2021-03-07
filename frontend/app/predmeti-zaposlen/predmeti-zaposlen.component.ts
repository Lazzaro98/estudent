import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Predmet } from '../model/predmet';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-predmeti-zaposlen',
  templateUrl: './predmeti-zaposlen.component.html',
  styleUrls: ['./predmeti-zaposlen.component.css']
})
export class PredmetiZaposlenComponent implements OnInit {

  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router) { 
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }

  sviPredmeti:Predmet[];  user:User;
  predmeti:String[];
  
  mojiPredmeti:Predmet[]=[];

  ngOnInit(): void {
    this.dohvatiMojePredmete();
  }
  
  dohvatiMojePredmete(){
      this.userService.predmeti().subscribe((data:Predmet[])=>{
        this.sviPredmeti=data;
        this.predmeti = this.user.predmeti;
        this.predmeti.forEach(element => {
          for(let i=0;i<this.sviPredmeti.length;i++){
            if(this.sviPredmeti[i].informacije[0]['sifra'] == element['sifra']){
              this.mojiPredmeti.push(this.sviPredmeti[i]);
            }
          }
    });
  })
  }

  preusmeri(gde:string){
    
    this.router.navigate([gde], {relativeTo: this.route});
  }

}
