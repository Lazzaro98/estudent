import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lab_objekat } from '../klase-za-DB/lab';
import { Predmetni_projekat_objekat } from '../klase-za-DB/predmetni-projekat';
import { Predmet } from '../model/predmet';
import { Spisak } from '../model/spisak';
import { User } from '../model/user';
import { User_objekat } from '../model/username-objekat';
import { UserService } from '../user.service';

@Component({
  selector: 'app-predmetni-projekat',
  templateUrl: './predmetni-projekat.component.html',
  styleUrls: ['./predmetni-projekat.component.css']
})
export class PredmetniProjekatComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  file:File;

  sviPredmeti:Predmet[];  
  user:User;
  predmeti:String[];
  
  //prom
  naziv:String;
  sifra:String;
  //prom


  rokD:string;
  naslovD:string;
  opisD:string;
  fajlD:string;


  pprojekti:Predmetni_projekat_objekat[]=[];

  mojiPredmeti:Predmet[]=[];
  id:String;
  predmet:Predmet;
  spiskovi:Spisak[];
  //pomSpisak:Spisak= <Spisak>{};

  ngOnInit(): void {
   // this.pomSpisak.spisak=[];
    this.spiskovi=[];
    this.dohvatiMojePredmete();
    this.id=this.route.parent.parent.snapshot.paramMap.get("id");
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

          for(let p=0;p<this.predmet.projekat.length;p++){
            var novi = new Predmetni_projekat_objekat();
            novi.dokument = this.predmet.projekat[p]['dokument'];
            novi.autor = this.predmet.projekat[p]['autor'];
            novi.date = this.predmet.projekat[p]['date'];
            novi.velicina = this.predmet.projekat[p]['velicina'];
            novi.naslov = this.predmet.projekat[p]['naslov'];
            novi.opis = this.predmet.projekat[p]['opis'];
            novi.rok = this.predmet.projekat[p]['rok'];
            this.pprojekti.push(novi);
          }
         

          }
         
          //this.dohvatiSpiskove();
    });
}

  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  dodajNovi(){
    if(this.file){
    var lab=new Predmetni_projekat_objekat();
    lab.autor=this.user.name+" "+this.user.surname;
    lab.date = (new Date).toString();
    lab.dokument = this.file.name;
    lab.opis = this.opisD;
    lab.naslov=this.naslovD;
    lab.rok = this.rokD;
    lab.velicina = (this.file.size/1000).toString();

    this.pprojekti.push(lab);
    this.userService.updateProjekat(this.naziv,this.pprojekti).subscribe((data:Predmetni_projekat_objekat[])=>{
      //alert(1);
    });

    this.userService.uploadProjekti(this.file,"neki").subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
    
    this.opisD="";
    this.naslovD="";
    this.rokD="";
    this.fajlD="";
    }
  }


  fileChange(file){
    this.file = file.target.files[0];
    this.fajlD = this.file.name;
    
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    //this.dodajTabeli(this.file.name, this.file.size);

  }

  ukloni(predavanje){
    //alert(1);
    this.pprojekti.splice(this.pprojekti.indexOf(predavanje),1);
    //BACKEND

    this.userService.updateProjekat(this.naziv,this.pprojekti).subscribe((data:Predmetni_projekat_objekat[])=>{
      //alert(1);
    });
  }

  compare(a:number | string | Date, b:number | string | Date, isAsc:boolean){
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  sortByDokument(){
    this.pprojekti.sort((a,b) => this.compare(a.dokument,b.dokument,this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByDate(){
    this.pprojekti.sort((a,b) => this.compare(new Date(a.date),new Date(b.date),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByAutor(){
    this.pprojekti.sort((a,b) => this.compare(a.autor,b.autor,this.isAsc));    
    this.isAsc=!this.isAsc;
  }
  sortByVelicina(){
    this.pprojekti.sort((a,b) => this.compare(Number(a.velicina),Number(b.velicina),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  isAsc:boolean;
  sortByNaslov(){
    this.pprojekti.sort((a,b) => this.compare(a.naslov,b.naslov,this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByOpis(){
    this.pprojekti.sort((a,b) => this.compare(a.opis,b.opis,this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByRok(){
    this.pprojekti.sort((a,b) => this.compare(new Date(a.rok),new Date(b.rok),this.isAsc));
    this.isAsc=!this.isAsc;
  }
}
