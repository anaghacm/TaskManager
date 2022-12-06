import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-displaytasks',
  templateUrl: './displaytasks.component.html',
  styleUrls: ['./displaytasks.component.scss']
})
export class DisplaytasksComponent implements OnInit {


  mapped: any = []
  temp: any = []
  notask: any = 0

  constructor() {

    if (localStorage.getItem('task')) {
      this.temp = JSON.parse(localStorage.getItem('task') || '')
      for (let a of this.temp) {
        this.mapped.push(a)
      }
    }
    if (this.mapped.length > 0) {
      this.notask = 1
    }
    else {
      this.notask = 0
    }
  }

  ngOnInit(): void {
  }

}
