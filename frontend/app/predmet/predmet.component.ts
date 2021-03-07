import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlObject } from 'url';
import { Predmet } from '../model/predmet';
import { Spisak } from '../model/spisak';
import { User } from '../model/user';
import { User_objekat } from '../model/username-objekat';
import { UserService } from '../user.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  file:File;

  sviPredmeti:Predmet[];  
  user:User;
  predmeti:String[];
  
  //prom
  naziv:String;
  sifra:String;
  //prom


  mojiPredmeti:Predmet[]=[];
  id:String;
  predmet:Predmet;
  spiskovi:Spisak[];
  //pomSpisak:Spisak= <Spisak>{};

  ngOnInit(): void {
   // this.pomSpisak.spisak=[];
    this.spiskovi=[];
    this.dohvatiMojePredmete();
    this.id=this.route.snapshot.paramMap.get("id");
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  dohvatiSpiskove(){
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
  }
  dohvatiMojePredmete(){
      this.userService.predmeti().subscribe((data:Predmet[])=>{
        this.sviPredmeti=data;
        
        this.predmeti = this.user.predmeti;
        this.predmeti.forEach(element => {
          for(let i=0;i<this.sviPredmeti.length;i++){
            if(this.sviPredmeti[i].informacije[0]['sifra'] == element['sifra'])
              this.mojiPredmeti.push(this.sviPredmeti[i]);
            }
          })

          this.mojiPredmeti.forEach(element=>{
            if(element.informacije[0]['sifra'] == this.id){
              this.predmet = element;
             // console.log(this.predmet);
            }
          })

          if(this.predmet){
          this.naziv = this.predmet.naziv;
          this.sifra = this.predmet.informacije[0]['sifra'];
          this.dohvatiSpiskove();
          //alert(1);
          }
         
          //this.dohvatiSpiskove();
    });
}

  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }

  imaMeNaSpisku(spisak:User_objekat[]):Boolean{
    for(let i=0;i<spisak.length;i++){
      if(this.user.username==spisak[i].username) return true;
    }
    return false;
  }
  dodajMe(spiskovi:Spisak[],spisak:Spisak){
    for(let i=0;i<spiskovi.length;i++){
      if(spiskovi[i]==spisak){
        var uo = new User_objekat();
        uo.username = this.user.username;
        uo.domaci = "Нисте предали рад."
        spiskovi[i].spisak.push(uo);
      }
    }
    this.userService.updateSpisak(this.naziv,spiskovi).subscribe((data:Predmet[])=>{
      console.log(spiskovi);
    });    
  }

  ukloniMe(spiskovi:Spisak[],spisak:Spisak){
    for(let i=0;i<spiskovi.length;i++){
      if(spiskovi[i]==spisak){
        var uo = new User_objekat();
        uo.username=this.user.username;
        for(let j=0;j<spiskovi[i].spisak.length;j++){
          if(spiskovi[i].spisak[j]['username']==this.user.username){
            uo.domaci=spiskovi[i].spisak[j]['domaci'];
            //alert(uo);
          }
        }
        spiskovi[i].spisak.splice(spisak.spisak.indexOf(uo),1);
      }
    }
    //this.data.splice(this.data.indexOf(msg), 1);
   // spisak.spisak.splice(.spisak.indexOf(this.user.username),1);
    this.userService.updateSpisak(this.naziv,spiskovi).subscribe((data:Predmet[])=>{
      
    });
  }

  predajDomaci(spiskovi:Spisak[],spisak:Spisak,domaci:string){
    for(let i=0;i<spiskovi.length;i++){
      if(spiskovi[i]==spisak){
        for(let j=0;j<spiskovi[i].spisak.length;j++){
          if(spiskovi[i].spisak[j]['username']==this.user.username){
            spiskovi[i].spisak[j]['domaci']=domaci;
          }
        }
      }
    }
    this.userService.updateSpisak(this.naziv,spiskovi).subscribe((data:Predmet[])=>{
      console.log(spiskovi);
    });    

    this.userService.upload(this.file,this.predmet.naziv+"/"+this.user.username).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }
  fileChange(spiskovi:Spisak[],spisak:Spisak,file){
    this.file = file.target.files[0];
    this.predajDomaci(spiskovi,spisak,this.file.name);


  }

  
}
