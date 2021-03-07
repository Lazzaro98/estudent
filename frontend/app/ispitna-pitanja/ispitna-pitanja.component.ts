import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ispit_objekat } from '../klase-za-DB/ispiti';
import { Predmet } from '../model/predmet';
import { Spisak } from '../model/spisak';
import { User } from '../model/user';
import { User_objekat } from '../model/username-objekat';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ispitna-pitanja',
  templateUrl: './ispitna-pitanja.component.html',
  styleUrls: ['./ispitna-pitanja.component.css']
})
export class IspitnaPitanjaComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  file:File;

  sviPredmeti:Predmet[];  
  user:User;
  predmeti:String[];
  
  //prom
  naziv:String;
  sifra:String;
  //prom

  ispiti:Ispit_objekat[]=[];


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

          for(let p=0;p<this.predmet.ispiti.length;p++){
            var novi = new Ispit_objekat();
            novi.dokument = this.predmet.ispiti[p]['dokument'];
            novi.autor = this.predmet.ispiti[p]['autor'];
            novi.date = this.predmet.ispiti[p]['date'];
            novi.velicina = this.predmet.ispiti[p]['velicina'];
            this.ispiti.push(novi);
          }

          }
         
          //this.dohvatiSpiskove();
    });
}

  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }

  dodajTabeli(dokument:string,velicina:number){
    var pred=new Ispit_objekat();
    pred.dokument=dokument;
    pred.autor=this.user.name+" "+this.user.surname;
    var trenutniDatum = new Date();
    pred.date = trenutniDatum.toString();
    pred.velicina=(velicina/1000).toString();

    this.ispiti.push(pred);

    //BACKEND

    this.userService.updateIspiti(this.naziv,this.ispiti).subscribe((data:Ispit_objekat[])=>{
      //alert(1);
    });
  }
  fileChange(file){
    this.file = file.target.files[0];
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    this.dodajTabeli(this.file.name, this.file.size);

    this.userService.uploadIspiti(this.file,"neki").subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

  ukloni(predavanje){
    //alert(1);
    this.ispiti.splice(this.ispiti.indexOf(predavanje),1);
    //BACKEND
    this.userService.updateIspiti(this.naziv,this.ispiti).subscribe((data:Ispit_objekat[])=>{
      //alert(1);
    });
  }
  compare(a:number | string | Date, b:number | string | Date, isAsc:boolean){
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  sortByDokument(){
    this.ispiti.sort((a,b) => this.compare(a.dokument,b.dokument,this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByDate(){
    this.ispiti.sort((a,b) => this.compare(new Date(a.date),new Date(b.date),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  sortByAutor(){
    this.ispiti.sort((a,b) => this.compare(a.autor,b.autor,this.isAsc));    
    this.isAsc=!this.isAsc;
  }
  sortByVelicina(){
    this.ispiti.sort((a,b) => this.compare(Number(a.velicina),Number(b.velicina),this.isAsc));
    this.isAsc=!this.isAsc;
  }
  isAsc:boolean;
}
