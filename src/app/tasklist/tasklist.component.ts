import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  mapped: any = []
  temp: any = []
  notask: any = 0
  buttonvalue: string = 'Add Task'
  editid: any = -1
  compl: number = 0
  incompl: number = 0

  taskForm = this.fb.group({
    task: ['', [Validators.required]],
  })
  constructor(private fb: FormBuilder) {

    if (localStorage.getItem('task')) {
      this.temp = JSON.parse(localStorage.getItem('task') || '')
      for (let a of this.temp) {
        this.mapped.push(a)
        if (a.completed) {
          this.compl += 1
        }
        else {
          this.incompl += 1
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
  addTask() {
    if (this.taskForm.valid) {
      if (this.editid == -1) {
        var task = this.taskForm.value.task;
        this.mapped.push({ task, completed: false })
        this.notask = 1
        this.incompl += 1
        this.saveTask()
      }
      else {
        var task = this.taskForm.value.task;
        this.mapped[this.editid] = { task, completed: false }
        this.buttonvalue = 'Add Task'
        this.editid = -1
        this.incompl += 1
        this.saveTask()
      }
      this.taskForm.controls['task'].setValue('')
    }
  }
  saveTask() {
    localStorage.setItem('task', JSON.stringify(this.mapped))
    localStorage.setItem('completed', JSON.stringify(this.compl))
    localStorage.setItem('incomplete', JSON.stringify(this.incompl))
    window.location.reload()
  }

  deleteTask(id: number) {
    if (this.mapped[id].completed) {
      this.compl -= 1
    }
    else {
      this.incompl -= 1
    }
    this.mapped = this.mapped?.filter((value: any, index: any) => index !== id)
    if (this.mapped.length == 0) {
      this.notask = 0
    }
    this.saveTask()
  }

  markComplete(id: number) {
    if (this.mapped[id].completed) {
      this.mapped?.map((value: any, index: any) => {
        if (id == index) {
          value.completed = false
          this.incompl += 1
          this.compl -= 1
        }
      })
    }
    else {
      this.mapped?.map((value: any, index: any) => {
        if (id == index) {
          value.completed = true
          this.incompl -= 1
          this.compl += 1
        }
      })
    }
    this.saveTask()
  }

  editTask(id: number) {
    this.buttonvalue = 'Done'
    this.taskForm.controls['task'].setValue(this.mapped[id].task)
    this.editid = id
  }

}
