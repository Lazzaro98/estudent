import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dashboard-neregistrovani',
  templateUrl: './dashboard-neregistrovani.component.html',
  styleUrls: ['./dashboard-neregistrovani.component.css']
})
export class DashboardNeregistrovaniComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,public translate: TranslateService
    ) { 
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }

 
  switchLang(lang: string) {
  this.translate.use(lang);
}
}
