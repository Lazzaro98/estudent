import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Informacije } from '../model/opredmetu';
import { Predmet } from '../model/predmet';
import { Spisak } from '../model/spisak';
import { User } from '../model/user';
import { User_objekat } from '../model/username-objekat';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dodaj-predmet',
  templateUrl: './dodaj-predmet.component.html',
  styleUrls: ['./dodaj-predmet.component.css']
})
export class DodajPredmetComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  file:File;

  sviPredmeti:Predmet[];  
  user:User;
  predmeti:String[];
  
  //prom
  naziv:String;
  sifra:String;
  tip:String;
  cilj:String;
  uslov:String;
  espb:number;
  //prom
  semestar:number;

updated:Boolean;


  mojiPredmeti:Predmet[]=[];
  id:String;
  predmet:Predmet;
  spiskovi:Spisak[];
  //pomSpisak:Spisak= <Spisak>{};

  ngOnInit(): void {
    
   // this.pomSpisak.spisak=[];
    this.spiskovi=[];
    //this.dohvatiMojePredmete();
    this.id=this.route.parent.snapshot.paramMap.get("id");
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }

  }
  /*dohvatiSpiskove(){
    let brSpiskova = this.predmet.spiskovi.length;
    
    for(let i = 0; i<brSpiskova;i++){
      var pomSpisak = new Spisak();
      pomSpisak.spisak=[];
      pomSpisak.imeSpiska=this.predmet.spiskovi[i]['ime-spiska'];
      pomSpisak.status = this.predmet.spiskovi[i]['status'];
      //alert(this.predmet.spiskovi[i]['ime-spiska']);
      for(let j =0;j<this.predmet.spiskovi[i]['spisak'].length;j++){
      var uo = new User_objekat();
      uo.domaci=this.predmet.spiskovi[i]['spisak'][j]['domaci'];
      uo.username = this.predmet.spiskovi[i]['spisak'][j]['username'];
      pomSpisak.spisak.push(uo);
        //this.pomSpisak.spisak[j]="fadshudkjas,";
       // console.log(this.pomSpisak);
      }
      this.spiskovi.push(pomSpisak);
    }
    console.log(this.spiskovi);
  }*/
 /* dohvatiMojePredmete(){
      this.userService.predmeti().subscribe((data:Predmet[])=>{
        this.sviPredmeti=data;
        
        this.predmeti = this.user.predmeti;
        this.predmeti.forEach(element => {
          for(let i=0;i<this.sviPredmeti.length;i++){
            if(this.sviPredmeti[i].informacije[0]['sifra'] == element['sifra'])
              this.mojiPredmeti.push(this.sviPredmeti[i]);
            }
          })
         // console.log(this.mojiPredmeti);
          this.sviPredmeti.forEach(element=>{
            if(element.informacije[0]['sifra'] == this.id){
              this.predmet = element;
              console.log(this.predmet);
            }
          })
          //alert(1);
          if(this.predmet || this.user.type==0){
          this.naziv = this.predmet.naziv;
          //alert(this.naziv);
          this.sifra = this.predmet.informacije[0]['sifra'];
          //this.uslov = this.predmet.lab;
          this.cilj = this.predmet.informacije[0]['cilj'];
          this.espb = this.predmet.informacije[0]['ESPB'];
          this.tip = this.predmet.informacije[0]['tip'];
          this.dohvatiSpiskove();
          //alert(1);
          }
          
          //this.dohvatiSpiskove();
    });
}
*/
  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  inf:Informacije;

  updateDB(){
    //alert(1);
    this.updated=true;
    this.inf = new Informacije();
    this.inf.sifra = this.sifra;
    this.inf.ESPB = this.espb;
    this.inf.tip = this.tip;
    this.inf.fond = 44;
    //this.inf.=this.uslov;
    this.inf.cilj=this.cilj;
    this.userService.dodajPredmet(this.naziv,this.inf,this.semestar).subscribe((data:Predmet[])=>{
     // alert(1);
    });
  }

}
