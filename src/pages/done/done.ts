import { Task } from './../../classes/task';
import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { TaskProvider } from './../../providers/task/task.provider';

@Component({
  selector: 'page-done',
  templateUrl: 'done.html'
})
export class DonePage {

  constructor(public navCtrl: NavController, public taskProvider: TaskProvider, private toastCtlr: ToastController,
    private alertCtrl: AlertController) {

  }

  deleteTask(task: Task){
    let title = task.title;
    if(this.taskProvider.deleteTask(task)){
      this.presentToast(title + ' was deleted!', 3000);
    }
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