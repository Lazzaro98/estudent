import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vezba_objekat } from '../klase-za-DB/vezbe';
import { Predmet } from '../model/predmet';
import { Spisak } from '../model/spisak';
import { User } from '../model/user';
import { User_objekat } from '../model/username-objekat';
import { UserService } from '../user.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-vezbe',
  templateUrl: './vezbe.component.html',
  styleUrls: ['./vezbe.component.css']
})
export class VezbeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  file:File;

  sviPredmeti:Predmet[];  
  user:User;
  predmeti:String[];
  
  //prom
  naziv:String;
  sifra:String;
  //prom

  vezbe:Vezba_objekat[]=[];


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

          this.sviPredmeti.forEach(element=>{
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
            console.log(this.predmet.vezbe.length);
          for(let p=0;p<this.predmet.vezbe.length;p++){
            
            var novi = new Vezba_objekat();
            novi.dokument = this.predmet.vezbe[p]['dokument'];
            novi.autor = this.predmet.vezbe[p]['autor'];
            novi.date = this.predmet.vezbe[p]['date'];
            novi.velicina = this.predmet.vezbe[p]['velicina'];
            this.vezbe.push(novi);
          }

          }
         
          //this.dohvatiSpiskove();
    });
}

  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  dodajTabeli(dokument:string,velicina:number){
    var pred=new Vezba_objekat();
    pred.dokument=dokument;
    pred.autor=this.user.name+" "+this.user.surname;
    var trenutniDatum = new Date();
    pred.date = trenutniDatum.toString();
    pred.velicina=(velicina/1000).toString();

    this.vezbe.push(pred);

    //BACKEND
    //alert(1);
    this.userService.updateVezbe(this.naziv,this.vezbe).subscribe((data:Vezba_objekat[])=>{
      //alert(1);
    });
  }
  fileChange(file){
    this.file = file.target.files[0];
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    this.dodajTabeli(this.file.name, this.file.size);

    this.userService.uploadVezbe(this.file,"neki").subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

  ukloni(predavanje){
    //alert(1);
    this.vezbe.splice(this.vezbe.indexOf(predavanje),1);
    //BACKEND
    this.userService.updateVezbe(this.naziv,this.vezbe).subscribe((data:Vezba_objekat[])=>{
      //alert(1);
    });
  }

  compare(a:number | string | Date, b:number | string | Date, isAsc:boolean){
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  sortByDokument(){
    this.vezbe.sort((a,b) => this.compare(a.dokument,b.dokument,this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByDate(){
    this.vezbe.sort((a,b) => this.compare(new Date(a.date),new Date(b.date),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByAutor(){
    this.vezbe.sort((a,b) => this.compare(a.autor,b.autor,this.isAsc));    
    this.isAsc=!this.isAsc;
  }
  sortByVelicina(){
    this.vezbe.sort((a,b) => this.compare(Number(a.velicina),Number(b.velicina),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  isAsc:boolean;
}
