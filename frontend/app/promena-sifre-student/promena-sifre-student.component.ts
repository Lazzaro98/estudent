import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-promena-sifre-student',
  templateUrl: './promena-sifre-student.component.html',
  styleUrls: ['./promena-sifre-student.component.css']
})
export class PromenaSifreStudentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private userService:UserService) { }
  
  staraSifra:String;
  novaLozinka:String;
  ponovljenaLozinka:String;
  user:User;
  greska:Boolean;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.greska=false;
    
  }

  promeniLozinku(){

    if(this.staraSifra == this.user.password && this.novaLozinka==this.ponovljenaLozinka){
      //alert(1);
      this.user.prvaprijava=0;
      this.preusmeri('../dashboard-student/welcome-student');
      this.userService.updateUser(this.user.username,this.novaLozinka,this.user.name,this.user.surname,this.user.mail,this.user.number,this.user.website,this.user.bio,this.user.classnum,0,this.user.predmeti,this.user.image).subscribe((data:User[])=>{
        // alert(1);
       });
    }
    else {
      this.greska=true;
    }
  }


  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
}
