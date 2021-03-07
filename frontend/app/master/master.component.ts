import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet';
import { UserService } from '../user.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  sviPredmeti:Predmet[] = [];
  masterPredmeti: Predmet[] = [];
  dohvatiZaposlene(){
    this.userService.predmeti().subscribe((data:Predmet[])=>{
      this.sviPredmeti=data;
      for(let i=0;i<this.sviPredmeti.length;i++){
        if(this.sviPredmeti[i].informacije[1]['sifra'][2]=="M"){
          this.masterPredmeti.push(this.sviPredmeti[i]);
        }
      }
      this.masterPredmeti.sort((a,b) => a.semestar-b.semestar);
    })
  }

  
}
