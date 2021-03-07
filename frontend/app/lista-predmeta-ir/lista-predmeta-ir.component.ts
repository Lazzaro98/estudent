import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-predmeta-ir',
  templateUrl: './lista-predmeta-ir.component.html',
  styleUrls: ['./lista-predmeta-ir.component.css']
})
export class ListaPredmetaIRComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dohvatiZaposlene();
  }


  sviPredmeti:Predmet[];
  irPredmeti: Predmet[] =[];
  dohvatiZaposlene(){
    this.userService.predmeti().subscribe((data:Predmet[])=>{
      this.sviPredmeti=data;
      for(let i=0;i<this.sviPredmeti.length;i++){
        if(this.sviPredmeti[i].informacije[0]['sifra'].includes("IR")){
          this.irPredmeti.push(this.sviPredmeti[i]);
        }
      }
      this.irPredmeti.sort((a,b) => a.semestar-b.semestar);
    })
  }
}
