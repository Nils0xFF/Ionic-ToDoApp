import { Task } from './../../classes/task';
import { Component } from '@angular/core';
import { NavController, ModalController, Modal, ToastController, AlertController } from 'ionic-angular';
import { TaskProvider } from '../../providers/task/task.provider';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  inputTaskName: string = '';
  inputTaskDescription: string = '';

  constructor(public navCtrl: NavController, public taskProvider: TaskProvider, public modalCtlr: ModalController, 
    private toastCtlr: ToastController, private alertCtrl: AlertController) {}

  openModalAdd(): void {
    let modal: Modal = this.modalCtlr.create('AddModalPage');
    modal.present();
  }

  deleteTask(task: Task){
    let title = task.title;
    if(this.taskProvider.deleteTask(task)){
      this.presentToast(title + ' was deleted!', 3000);
    }
  }

  doneTask(task: Task){
    this.presentToast(task.title + ' marked as done!', 3000);
    this.taskProvider.doneTask(task);
  }

  presentToast(message: string, duration: number){
    const toast = this.toastCtlr.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  presentConfirm(task: Task) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete this task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteTask(task);
          }
        }
      ]
    });
    alert.present();
  }

}
