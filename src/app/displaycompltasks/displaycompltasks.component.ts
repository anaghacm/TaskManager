import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycompltasks',
  templateUrl: './displaycompltasks.component.html',
  styleUrls: ['./displaycompltasks.component.scss']
})
export class DisplaycompltasksComponent implements OnInit {
  mapped: any = []
  temp: any = []
  notask: any = 0

  constructor() {
    if (localStorage.getItem('task')) {
      this.temp = JSON.parse(localStorage.getItem('task') || '')
      for (let a of this.temp) {
        if (a.completed) {
          this.mapped.push(a)
        }
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
