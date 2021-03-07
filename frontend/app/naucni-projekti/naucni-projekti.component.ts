import { Component, OnInit } from '@angular/core';
import { naucniProjekat } from '../model/naucni-projekat';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-naucni-projekti',
  templateUrl: './naucni-projekti.component.html',
  styleUrls: ['./naucni-projekti.component.css']
})
export class NaucniProjektiComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dohvatiZaposlene();
  }

  sviProjekti:naucniProjekat[]=[];
  dohvatiZaposlene(){
    this.userService.naucniProjekti().subscribe((data:naucniProjekat[])=>{
      this.sviProjekti=data;
     // alert(1);
      //alert(data.length);
    })
  }
}
