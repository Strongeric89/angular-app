import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //this will be set using data from db using GET requests
  name = 'user from DB';

  admin = 1;


  constructor() {

   }

  ngOnInit() {

  }

}
