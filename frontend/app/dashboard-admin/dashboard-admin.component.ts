import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute){}
  user:User;
  username:String;
  ulogovan:Boolean;
  ngOnInit(): void {
    this.username = "";
    this.ulogovan=false;
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
      this.username=this.user.username;
      this.ulogovan=true;
    }
  }
  odjava(){
    localStorage.clear();
    this.ulogovan=false;
    this.username="";
    this.router.navigate(['dashboard-neregistrovani/login']);
  }



  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  odi(gde:string){
    this.router.navigate([gde]);
  }

}
