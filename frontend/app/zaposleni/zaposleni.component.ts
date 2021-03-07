import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  constructor(private userService:UserService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.dohvatiZaposlene();
  }

  zaposleni:User[]=[];
  sviUseri:User[]=[];
  dohvatiZaposlene(){
    this.userService.users().subscribe((data:User[])=>{
      this.sviUseri=data;
      for(let i=0;i<this.sviUseri.length;i++){
        if(this.sviUseri[i].type==1){
          this.zaposleni.push(this.sviUseri[i]);
        }
      }
    })
  }
  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
}
