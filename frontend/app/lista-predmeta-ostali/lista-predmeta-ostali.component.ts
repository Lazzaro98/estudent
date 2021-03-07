import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-predmeta-ostali',
  templateUrl: './lista-predmeta-ostali.component.html',
  styleUrls: ['./lista-predmeta-ostali.component.css']
})
export class ListaPredmetaOstaliComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dohvatiZaposlene();
  }

  sviPredmeti:Predmet[];
  irPredmeti: Predmet[] =[];
  siPredmeti: Predmet[] = [];
  ostaliPredmeti:Predmet[]=[];
  dohvatiZaposlene(){
    this.userService.predmeti().subscribe((data:Predmet[])=>{
      this.sviPredmeti=data;
      for(let i=0;i<this.sviPredmeti.length;i++){
        if(!this.sviPredmeti[i].informacije[0]['sifra'].includes("SI") && !this.sviPredmeti[i].informacije[0]['sifra'].includes("IR")){
          this.ostaliPredmeti.push(this.sviPredmeti[i]);
        }
      }
      this.ostaliPredmeti.sort((a,b) => a.semestar-b.semestar);
    })
  }
}