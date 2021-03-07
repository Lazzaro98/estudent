import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Predavanja_objekat } from '../klase-za-DB/predavanja';
import { Predmet } from '../model/predmet';
import { Spisak } from '../model/spisak';
import { User } from '../model/user';
import { User_objekat } from '../model/username-objekat';
import { UserService } from '../user.service';
import {Sort} from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-predavanja',
  templateUrl: './predavanja.component.html',
  styleUrls: ['./predavanja.component.css']
})
export class PredavanjaComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  file:File;

  sviPredmeti:Predmet[];  
  user:User;
  predmeti:String[];
  
  //prom
  naziv:String;
  sifra:String;
  //prom

  fileToUpload: File = null;

  predavanja:Predavanja_objekat[] = [];
  sortiranaPredavanja:Predavanja_objekat[]=[];

  mojiPredmeti:Predmet[]=[];
  id:String;
  predmet:Predmet;
  spiskovi:Spisak[];
  //pomSpisak:Spisak= <Spisak>{};

  ngOnInit(): void {
   // this.pomSpisak.spisak=[];
    this.spiskovi=[];
    this.dohvatiMojePredmete();
    this.id=this.route.parent.snapshot.paramMap.get("id");
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

    //console.log(this.spiskovi);
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
          //console.log(this.mojiPredmeti);
          this.sviPredmeti.forEach(element=>{
            if(element.informacije[0]['sifra'] == this.id){
              this.predmet = element;
            }
          })
          
          if(this.predmet){
            
          this.naziv = this.predmet.naziv;
          this.sifra = this.predmet.informacije[0]['sifra'];
         // alert(1);
          this.dohvatiSpiskove();
       
          for(let p=0;p<this.predmet.predavanja.length;p++){
            var novi = new Predavanja_objekat();
            novi.dokument = this.predmet.predavanja[p]['dokument'];
            novi.autor = this.predmet.predavanja[p]['autor'];
            novi.date = this.predmet.predavanja[p]['date'];
            novi.velicina = this.predmet.predavanja[p]['velicina'];
            this.predavanja.push(novi);
          }
         // console.log(this.predavanja);
          }
          
          //this.dohvatiSpiskove();
    });
}
dodaj(pred:Predavanja_objekat){

}
  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  dodajTabeli(dokument:string,velicina:number){
    var pred=new Predavanja_objekat();
    pred.dokument=dokument;
    pred.autor=this.user.name+" "+this.user.surname;
    var trenutniDatum = new Date();
    pred.date = trenutniDatum.toString();
    pred.velicina=(velicina/1000).toString();

    this.predavanja.push(pred);

    //BACKEND

    this.userService.updatePredavanja(this.naziv,this.predavanja).subscribe((data:Predavanja_objekat[])=>{
      //alert(1);
    });
  }
  fileChange(file){
    this.file = file.target.files[0];
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    this.dodajTabeli(this.file.name, this.file.size);

    this.userService.uploadPredavanje(this.file,"neki").subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

  ukloni(predavanje){
    //alert(1);
    this.predavanja.splice(this.predavanja.indexOf(predavanje),1);
    //BACKEND

    this.userService.updatePredavanja(this.naziv,this.predavanja).subscribe((data:Predavanja_objekat[])=>{
      //alert(1);
    });
  }
  sortByDokument(){
    this.predavanja.sort((a,b) => this.compare(a.dokument,b.dokument,this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByDate(){
    this.predavanja.sort((a,b) => this.compare(new Date(a.date),new Date(b.date),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByAutor(){
    this.predavanja.sort((a,b) => this.compare(a.autor,b.autor,this.isAsc));    
    this.isAsc=!this.isAsc;
  }
  sortByVelicina(){
    this.predavanja.sort((a,b) => this.compare(Number(a.velicina),Number(b.velicina),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  isAsc:boolean;
  
  sortData(sort:Sort){
    const data = this.predavanja.slice();
    if(!sort.active || sort.direction===''){
      this.sortiranaPredavanja=data;
      return;
    }

    this.sortiranaPredavanja = data.sort((a, b)=>{
      const isAsc = sort.direction === 'asc';
      switch(sort.active){
        case 'dokument': return this.compare(a.dokument,b.dokument,isAsc);
        case 'date': return this.compare(new Date(a.date),new Date(b.date),isAsc);
        case 'autor':return this.compare(a.autor, b.autor,isAsc);
        case 'velicina': return this.compare(Number(a.velicina), Number(b.velicina), isAsc);
        default: return 0;
      }
    });
  }
  compare(a:number | string | Date, b:number | string | Date, isAsc:boolean){
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  
 


}
