import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Predmet } from '../model/predmet';
import { User } from '../model/user';
import { Vest } from '../model/vest';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dodaj-vest',
  templateUrl: './dodaj-vest.component.html',
  styleUrls: ['./dodaj-vest.component.css']
})
export class DodajVestComponent implements OnInit {

  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router) { 
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }
  file:File;
  sviPredmeti:Predmet[]=[];  user:User;
  predmeti:String[]=[];
  updated:Boolean;

  mojiPredmeti:Predmet[]=[];


  naslov:String;
  selektovaniPredmeti:String[] = [];
  predmetiToAdd:String[] = [];
  vest:String;
  date:Date;

  novaVest:Vest;
  ngOnInit(): void {
    this.dohvatiMojePredmete();
    this.novaVest.Fajlovi=[];
  }
  
  dohvatiMojePredmete(){
      this.userService.predmeti().subscribe((data:Predmet[])=>{
        this.sviPredmeti=data;
        this.predmeti = this.user.predmeti;
        this.predmeti.forEach(element => {
          for(let i=0;i<this.sviPredmeti.length;i++){
            if(this.sviPredmeti[i].informacije[0]['sifra'] == element['sifra']){
              this.mojiPredmeti.push(this.sviPredmeti[i]);
            }
          }
        this.selektovaniPredmeti = new Array <String>(this.mojiPredmeti.length);
        for(let i=0;i<this.sviPredmeti.length;i++){
            this.selektovaniPredmeti[i] = "";
        }
        
    });
  })
  }

  preusmeri(gde:string){
    
    this.router.navigate([gde], {relativeTo: this.route});
  }

  filename:String;
  fileChange(file){
    this.file = file.target.files[0];
    this.filename=this.file.name;
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    //this.dodajTabeli(this.file.name, this.file.size);
  }
  dodajVest(){
    
    console.log(this.naslov + " " + this.vest + " " + this.date+ " " + this.selektovaniPredmeti);
    this.novaVest = new Vest();
    this.novaVest.Fajlovi=[];
    this.novaVest.tekst = this.vest;
    this.novaVest.naslov=this.naslov;
    this.novaVest.datum=this.date;
    this.predmetiToAdd = new Array<String>();
    for(let i =0;i<this.selektovaniPredmeti.length;i++){    
        if(this.selektovaniPredmeti[i]!=""){
          this.predmetiToAdd.push(this.selektovaniPredmeti[i]);
        }
    }


    this.novaVest.predmeti=this.predmetiToAdd;
    //alert(this.selektovaniPredmeti.length);

    this.novaVest.Fajlovi.push(this.filename);
    console.log(this.novaVest);
    //BACKEND

    this.userService.dodajVest(this.naslov,this.predmetiToAdd,this.vest,this.date,this.filename).subscribe(ob=>{
      
    })

    this.updated=true;
  }
  regulisi(i){
    //alert(1);
    if(this.selektovaniPredmeti[i]==""){
      this.selektovaniPredmeti[i]= this.mojiPredmeti[i].naziv;
    }
    else {
      this.selektovaniPredmeti[i]="";
    }
  }
}
