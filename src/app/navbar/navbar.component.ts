import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../global-component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  compl: number
  incompl: number
  total: number

  constructor() { 
    this.compl = GlobalComponent.compl
    this.incompl = GlobalComponent.incompl
    this.total = GlobalComponent.total
  }

  ngOnInit(): void {
  }

}
