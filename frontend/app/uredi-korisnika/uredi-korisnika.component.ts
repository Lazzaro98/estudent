import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Predmet } from '../model/predmet';
import { User } from '../model/user';
import { PredmetZaposlenComponent } from '../predmet-zaposlen/predmet-zaposlen.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-uredi-korisnika',
  templateUrl: './uredi-korisnika.component.html',
  styleUrls: ['./uredi-korisnika.component.css']
})
export class UrediKorisnikaComponent implements OnInit {

  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User();
    this.id=this.route.snapshot.paramMap.get("id");
    //this.user = JSON.parse(localStorage.getItem('user'));
    this.dohvatiKorisnike();
    this.updated=false;
  }
  id:String;
  user:User;
  updated:Boolean;

  selectedPredmet:String=null;
  sviPredmeti:Predmet[]=[];
  mojiPredmeti:Predmet[]=[];
  dohvatiPredmete(){
    this.userService.predmeti().subscribe((data:Predmet[])=>{
      this.sviPredmeti=data;
      //alert(this.predmeti);
      //alert(this.sviPredmeti[0].informacije[0]);
      //alert(this.user.predmeti);

      for(let i=0;i<this.sviPredmeti.length;i++){
        //alert(this.predmeti.length);

        //alert(this.user.predmeti.length);
        for(let j=0;j<this.user.predmeti.length;j++){
          //alert(this.sviPredmeti[i].informacije[0]['sifra'] + "   i    "+this.user.predmeti[j]);
          if(this.sviPredmeti[i].informacije[0]['sifra']==this.user.predmeti[j]['sifra']){
            //alert(this.sviPredmeti[i].informacije[0]['sifra'] + "   i    "+this.predmeti[j])
            this.mojiPredmeti.push(this.sviPredmeti[i]);
            //alert(1);
          }
        }
      }
    })
  }

  sviUseri:User[]=[];
  dohvatiKorisnike(){
    
    this.userService.users().subscribe((data:User[])=>{
      this.sviUseri=data;
      //console.log(this.sviUseri);
      this.sviUseri.forEach(element=>{
        if(element.username==this.id){
          this.user=element;
        }
      })
      //alert(data);
      this.dohvatiPredmete();
    })
  }


  getPredmetByName(name:String){
    var vratiPredmet = new Predmet();
    for(let i=0;i<this.sviPredmeti.length;i++){
      if(this.sviPredmeti[i].naziv == name){
        vratiPredmet = this.sviPredmeti[i];
      }
    }
    return vratiPredmet;
  }

  updateDB(){
    //alert(this.user.bio);
    //this.user.predmeti = this.mojiPredmeti['naziv'];

    this.mojiPredmeti.forEach(element=>{
      
      this.user.predmeti.push(element.naziv);
    })

    console.log(this.user.predmeti);
    this.userService.updateUser(this.user.username,this.user.password,this.user.name,this.user.surname,this.user.mail,this.user.number,this.user.website,this.user.bio,this.user.classnum,0,this.user.predmeti,this.user.image).subscribe((data:User[])=>{
      // alert(1);
     });
     //localStorage.setItem('user',JSON.stringify(this.user));
    this.updated=true;
  }
  dodajPredmet(){
    var found = false;
    /*alert(this.selectedPredmet);*/

    for(let i = 0; i<this.mojiPredmeti.length; i++)
    {
     // alert(this.selectedPredmet + "    "+ this.mojiPredmeti[i].naziv);
      if(this.selectedPredmet==this.mojiPredmeti[i].naziv){
        found=true;
      }
    }
   
   if(!found){
      this.mojiPredmeti.push(this.getPredmetByName(this.selectedPredmet));
      //this.updateDB();
    }
  }

  ukloniPredmet(){
    for(let i =0;i<this.mojiPredmeti.length;i++){
      if(this.selectedPredmet==this.mojiPredmeti[i].naziv){
        this.mojiPredmeti.splice(i,1);
      }
    }

  }
  
greskaRezolucija:Boolean;
  onUploadChange(evt: any) {
    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      
      

      reader.onload = this.handleReaderLoaded.bind(this);
      
      reader.readAsBinaryString(file);
      var width, height;

      var img = new Image();
      const s = this.user.image;

      img.src = s.toString();
        width=img.width;
        height=img.height;
        if(width>300 || height>300){
          this.greskaRezolucija=true;
          //this.user.image="";
        }
        else{
          this.greskaRezolucija=false;
        }
    }
  }
 
  handleReaderLoaded(e) {
    this.user.image=('data:image/png;base64,' + btoa(e.target.result));
  }
  
}


