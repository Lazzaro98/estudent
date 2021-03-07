import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-left-side-neregistrovan',
  templateUrl: './left-side-neregistrovan.component.html',
  styleUrls: ['./left-side-neregistrovan.component.css']
})
export class LeftSideNeregistrovanComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  
}
