import { HttpClient } from '@angular/common/http';
import { CssSelector } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CSVRecord } from '../model/CSVRecord';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-uredi-korisnike',
  templateUrl: './uredi-korisnike.component.html',
  styleUrls: ['./uredi-korisnike.component.css']
})
export class UrediKorisnikeComponent implements OnInit {

  constructor(private http:HttpClient,private userService:UserService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.dohvatiKorisnike();
  }

  zaposleni:User[]=[];
  sviUseri:User[]=[];
  dohvatiKorisnike(){
    this.userService.users().subscribe((data:User[])=>{
      this.sviUseri=data;
      //alert(data);
    })
  }

  fileChange(file){
    //this.file = file.target.files[0];
    //this.predajDomaci(spiskovi,spisak,this.file.name);
    //this.dodajTabeli(this.file.name, this.file.size);
  }
  ukloni(username:String){
    this.userService.removeKorisnika(username).subscribe((data:User[])=>{
    })
    for(let i=0;i<this.sviUseri.length;i++){
      if(this.sviUseri[i].username==username){
        this.sviUseri.splice(i,1);
      }
    }
  }

  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }

userArray:CSVRecord[]=[];

 ucitaj(){
  this.http.get('assets/tabelaStudenata.csv', {responseType: 'text'})
  .subscribe(
      data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            var cs = new CSVRecord();
            cs.username=row[0];
            cs.password=row[1];
            cs.firstName=row[2];
            cs.lastName=row[3].trim();
            this.userArray.push(cs);
            this.userService.registerS(cs.username,cs.password,cs.firstName,cs.lastName,
              "","","aktivan").subscribe(ob=>{
              })
            var u = new User();
            u.username=cs.username;
            u.password=cs.password;
            u.name=cs.firstName;
            u.surname=cs.lastName;
            u.status="aktivan";
            u.type=2;
            this.sviUseri.push(u);
          }
          console.log(this.userArray);
      },
      error => {
          console.log(error);
      }
  );
  
 }

  //ucitati korisnike iz csv fajla


}


