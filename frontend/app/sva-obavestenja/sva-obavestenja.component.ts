import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sva-obavestenja',
  templateUrl: './sva-obavestenja.component.html',
  styleUrls: ['./sva-obavestenja.component.css']
})
export class SvaObavestenjaComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
}
