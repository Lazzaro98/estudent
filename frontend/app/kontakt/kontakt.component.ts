import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(private userService:UserService) { }

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
}
