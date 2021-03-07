import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Predmet } from '../model/predmet';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-zaposlen-info',
  templateUrl: './zaposlen-info.component.html',
  styleUrls: ['./zaposlen-info.component.css']
})
export class ZaposlenInfoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.dohvatiZaposlene();
  }

  id:string;
  zaposleni:User[]=[];
  sviUseri:User[]=[];

  ime:String;
  prezime:String;
  status:String;
  mail:String;
  number:String;
  website:String;
  bio:String;
  zvanje:String;
  classnum:number;
  slika:string;
  predmeti:String[]=[];
  image:String;
  dohvatiZaposlene(){
    this.userService.users().subscribe((data:User[])=>{
      this.sviUseri=data;
      for(let i=0;i<this.sviUseri.length;i++){
        if(this.sviUseri[i].type==1){
          this.zaposleni.push(this.sviUseri[i]);
        }
      }
      this.ucitajPodatke();
    })
  }
  ucitajPodatke(){
    this.predmeti = [];
    this.zaposleni.forEach(k=>{
     
      if(k.username == this.id){
        this.ime = k.name;
        this.prezime = k.surname;
        this.number = k.number;
        this.status = k.status;
        this.mail = k.mail;
        this.website = k.website;
        this.bio = k.bio;
        this.zvanje = k.zvanje;
        this.classnum = k.classnum;
        this.image=k.image;
        //console.log(k.predmeti);
        for(let i=0;i<k.predmeti.length;i++){
          this.predmeti.push(k.predmeti[i]['sifra']);
         // alert(k.predmeti[i]['sifra']);
        }
        //alert(this.predmeti);
       
      }
      
    })
    this.dohvatiPredmete();
  }


  sviPredmeti:Predmet[]=[];
  mojiPredmeti:Predmet[]=[];
  dohvatiPredmete(){
    this.userService.predmeti().subscribe((data:Predmet[])=>{
      this.sviPredmeti=data;
      //alert(this.predmeti);
      //alert(this.sviPredmeti[0].informacije[0]);
      for(let i=0;i<this.sviPredmeti.length;i++){
        //alert(this.predmeti.length);
        for(let j=0;j<this.predmeti.length;j++){
          if(this.sviPredmeti[i].informacije[0]['sifra']==this.predmeti[j]){
            //alert(this.sviPredmeti[i].informacije[0]['sifra'] + "   i    "+this.predmeti[j])
            this.mojiPredmeti.push(this.sviPredmeti[i]);
          }
        }
      }
    })
  }
}
