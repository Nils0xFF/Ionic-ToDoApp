import { Injectable } from '@angular/core';
import { Task } from '../../classes/task';

@Injectable()
export class TaskProvider {

  private tasks: Task[] = [];
  private map: number[] = [];

  constructor() {
    this.loadData();
  }

  private storeData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadData() {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      this.map = this.tasks.map(task => {return task.id });
    } else {
      this.tasks = [];
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(index: number): Task {
    if (index < this.tasks.length) {
      return this.tasks[index];
    }
    else {
      return { title: '', description: '', done: false } as Task;
    }
  }

  getTasksDone(): Task[] {
    return this.tasks.filter(task => task.done === true);
  }

  getTasksToDo(): Task[] {
    return this.tasks.filter(task => task.done !== true);
  }

  addTask(task: Task): void {
    task.id = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push(task);
    this.map.push(task.id);
    this.storeData();
  }

  updateTask(index: number, task: Task): void {
    this.tasks[index] = task;
    this.storeData();
  }

  doneTask(task: Task) :boolean {
    this.tasks[this.map.indexOf(task.id)].done = true;
    this.storeData();
    return true;
  }

  deleteTask(task: Task): boolean {
    let index = this.map.indexOf(task.id);
    this.tasks.splice(index, 1);
    this.map.splice(index, 1);
    this.storeData();
    return true;
  }

  reset(): void {
    localStorage.removeItem('tasks');
    this.loadData();
  }

}
