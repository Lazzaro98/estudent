import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { defaultMaxListeners } from 'stream';
import { DashboardNeregistrovaniRoutes } from '../dashboard-neregistrovani/dashboard-neregistrovani.routes';
import { Obavestenje } from '../model/obavestenje';
import { UserService } from '../user.service';


@Component({
  selector: 'app-praksa',
  templateUrl: './praksa.component.html',
  styleUrls: ['./praksa.component.css']
})
export class PraksaComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserService, private router:Router) { }
  svaObavestenja:Obavestenje[] = [];
  prakse:Obavestenje[]=[];
  ngOnInit(): void {
    this.dohvatiObavestenja();
  }
  datum:Date;
  dohvatiObavestenja(){
    this.userService.obavestenja().subscribe((data:Obavestenje[])=>{
      this.svaObavestenja=data;
      //alert(data);
      for(let i=0;i<this.svaObavestenja.length;i++){
        if(this.svaObavestenja[i].type==2 && this.zastareo(this.svaObavestenja[i].date)==0){
          this.prakse.push(this.svaObavestenja[i]);
           
          //alert(this.calculateDiff(x));
        }
      }
  })
  }
  vrati(){
    this.router.navigate(['../']);
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
