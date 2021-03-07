import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Predmet } from '../model/predmet';
import { User } from '../model/user';
import { Vest } from '../model/vest';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

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
  x:Boolean;

  naslov:String;
  selektovaniPredmeti:String[] = [];
  sleektovaniPredmetiB:Boolean[]=[];
  predmetiToAdd:String[] = [];
  tekst:String;
  datum:Date;

  id:number;

  novaVest:Vest;
  ngOnInit(): void {
    //alert(3);
    this.x=true;
    this.id=0;
    this.dohvatiMojePredmete();
    
   // alert(2);
    //this.novaVest.filename=[];
    //alert(2);
  

    this.getVesti();
  }
  
  dohvatiMojePredmete(){
      this.userService.predmeti().subscribe((data:Predmet[])=>{
        this.sviPredmeti=data;
        this.predmeti = this.user.predmeti;
        //alert(this.sviPredmeti.length);
        this.predmeti.forEach(element => {
          //alert(0);
          for(let i=0;i<this.sviPredmeti.length;i++){
            if(this.sviPredmeti[i].informacije[0]['sifra'] == element['sifra']){
              this.mojiPredmeti.push(this.sviPredmeti[i]);
              //alert(this.mojiPredmeti[i].informacije[0]['sifra']);
            }
          }
          console.log("moji predmeti:");
          console.log(this.mojiPredmeti);

//          alert(6);
        this.selektovaniPredmeti = new Array <String>(this.mojiPredmeti.length);
        this.sleektovaniPredmetiB=new Array <Boolean>(this.mojiPredmeti.length);
        for(let i=0;i<this.mojiPredmeti.length;i++){
            this.selektovaniPredmeti[i] = "";
            this.sleektovaniPredmetiB[i]=false;
        }
    });
  })
  //console.log("Moji predmeti su" + this.mojiPredmeti);
  
  }

  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }

  filename:Array<String> = [];
  fileChange(file){
    this.file = file.target.files[0];
    this.filename.push(this.file.name);
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    //this.dodajTabeli(this.file.name, this.file.size);
  }
 


    
 /* regulisi(i){
    //alert(1);
    if(this.selektovaniPredmeti[i]==""){
      this.selektovaniPredmeti[i]= this.mojiPredmeti[i].naziv;
    }
    else {
      this.selektovaniPredmeti[i]="";
    }
  }*/
  vesti:Vest[]=[];
  
  getVesti(){
    this.userService.vesti().subscribe((data:Vest[])=>{
      this.vesti=data;
      this.getVest(this.id);
    })
    
  }
  getVest(i:number){
    //alert(i);
    this.naslov = this.vesti[i].naslov;
    this.tekst=this.vesti[i].tekst;
    this.datum = this.vesti[i].datum;

    this.filename = this.vesti[i].Fajlovi;
    console.log("Ovo je tekst"+this.tekst['tekst']);
    for(let i=0;i<this.mojiPredmeti.length;i++){
      this.selektovaniPredmeti[i] = "";
      this.sleektovaniPredmetiB[i]=false;
    }

    for(let i=0;i<this.mojiPredmeti.length;i++){
      for(let j =0;j<this.vesti[i].predmeti.length;j++){
        if(this.mojiPredmeti[i].naziv == this.vesti[i].predmeti[j]){
          this.selektovaniPredmeti[i]=this.mojiPredmeti[i].naziv;
          this.sleektovaniPredmetiB[i]=true;
        }
      }
    }

    
  }

  idiNext()
  {
    this.x=false;
    for(let i=0;i<this.mojiPredmeti.length;i++){
      this.selektovaniPredmeti[i] = "";
      this.sleektovaniPredmetiB[i]=false;
    }
    console.log(this.sleektovaniPredmetiB);
    this.id=(this.id+1)%this.vesti.length;
    this.getVest(this.id);
    console.log('selektovani predmeti:');

  }
  idiPrev(){
    for(let i=0;i<this.mojiPredmeti.length;i++){
      this.selektovaniPredmeti[i] = "";
      this.sleektovaniPredmetiB[i]=false;
    }

    this.id=this.id-1;
    if(this.id<0)this.id = this.vesti.length-1;
    this.getVest(this.id);
  }

  proveriCheck(predmet:Predmet){
    this.vesti[this.id].predmeti.forEach(element=>{
      if(element == predmet.naziv)
        return true;
    })
    return false;
  }
  updateVest(){
    this.userService.updateVest(this.naslov,this.predmetiToAdd,this.tekst,this.datum,this.filename).subscribe(ob=>{
      
    })
  }

  regulisi(i){
    //alert(1);
    if(this.selektovaniPredmeti[i]==""){
      this.selektovaniPredmeti[i]= this.mojiPredmeti[i].naziv;
      this.sleektovaniPredmetiB[i]=true;
      this.x=true;
    }
    else {
      this.selektovaniPredmeti[i]="";
      this.sleektovaniPredmetiB[i]=false;

    }
  }

}
