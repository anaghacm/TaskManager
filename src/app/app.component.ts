import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  compl: number
  incompl: number
  total: number

  title = 'taskManager';

  constructor() { 
    this.compl = JSON.parse(localStorage.getItem('completed') || '')
    this.incompl = JSON.parse(localStorage.getItem('incomplete') || '')
    this.total = this.compl + this.incompl
  }
 }
