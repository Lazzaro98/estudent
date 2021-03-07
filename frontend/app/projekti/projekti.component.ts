import { Component, OnInit } from '@angular/core';
import { Projekat } from '../model/projekat';
import { UserService } from '../user.service';

@Component({
  selector: 'app-projekti',
  templateUrl: './projekti.component.html',
  styleUrls: ['./projekti.component.css']
})
export class ProjektiComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dohvatiZaposlene();
  }

  sviProjekti:Projekat[]=[];
  dohvatiZaposlene(){
    this.userService.projekti().subscribe((data:Projekat[])=>{
      this.sviProjekti=data;
      //alert(data.length);
    })
  }
}
