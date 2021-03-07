import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user'));
    }
  }
  user:User;
  updated:Boolean;

  updateDB(){
    //alert(this.user.bio);
    this.userService.updateUser(this.user.username,this.user.password,this.user.name,this.user.surname,this.user.mail,this.user.number,this.user.website,this.user.bio,this.user.classnum,0,this.user.predmeti,this.user.image).subscribe((data:User[])=>{
      // alert(1);
     });
     localStorage.setItem('user',JSON.stringify(this.user));

  }
}
