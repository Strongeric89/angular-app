import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boardTitle = 'title from db';
  boardCreated = 'creation data';
  numofdays = 'numofdays from db';
  admin = 1;
  user = 1;


  constructor() { }

  ngOnInit() {
  }

}
