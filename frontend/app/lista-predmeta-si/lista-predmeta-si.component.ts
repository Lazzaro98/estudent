import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-predmeta-si',
  templateUrl: './lista-predmeta-si.component.html',
  styleUrls: ['./lista-predmeta-si.component.css']
})
export class ListaPredmetaSIComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dohvatiZaposlene();
  } 
  

  sviPredmeti:Predmet[];
  siPredmeti: Predmet[] = [];
  dohvatiZaposlene(){
    this.userService.predmeti().subscribe((data:Predmet[])=>{
      this.sviPredmeti=data;
      for(let i=0;i<this.sviPredmeti.length;i++){
        if(this.sviPredmeti[i].informacije[0]['sifra'].includes("SI")){
          this.siPredmeti.push(this.sviPredmeti[i]);
        }
      }
      this.siPredmeti.sort((a,b) => a.semestar-b.semestar);
    })
  }
}
