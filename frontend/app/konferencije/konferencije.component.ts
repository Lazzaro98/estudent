import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obavestenje } from '../model/obavestenje';
import { UserService } from '../user.service';

@Component({
  selector: 'app-konferencije',
  templateUrl: './konferencije.component.html',
  styleUrls: ['./konferencije.component.css']
})
export class KonferencijeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserService, private router:Router) { }
  svaObavestenja:Obavestenje[] = [];
  konferencije:Obavestenje[]=[];
  ngOnInit(): void {
    this.dohvatiObavestenja();
  }

  dohvatiObavestenja(){
    this.userService.obavestenja().subscribe((data:Obavestenje[])=>{
      this.svaObavestenja=data;
      for(let i=0;i<this.svaObavestenja.length;i++){
        if(this.svaObavestenja[i].type==1 && this.zastareo(this.svaObavestenja[i].date)==0){
          this.konferencije.push(this.svaObavestenja[i]);
        }
      }
    })
  }
  vrati(){
    this.router.navigate(['sva-obavestenja']);
  }
  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }


  calculateDiff(dateSent){
    let currentDate = new Date();
    dateSent = new Date(dateSent);
  
    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
  }
  
  zastareo(datum:String){
    let dan = "", mesec ="", godina="";
            let j = 0;
            while(datum.substr(j,1) !='.'){dan+=datum.substr(j++,1);}
            j++;
            while(datum.substr(j,1) !='.'){mesec+=datum.substr(j++,1);}
            j++;
            while(datum.substr(j,1) !='.'){godina+=datum.substr(j++,1);}
            let datumr = Date.parse(mesec+"/"+dan+"/"+godina);
            let razlika = this.calculateDiff(datum);
            if(razlika > 90) return 1;
            else return 0;
  }
}
