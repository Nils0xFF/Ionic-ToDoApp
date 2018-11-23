import { TaskProvider } from './../../providers/task/task.provider';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, private taskProvider : TaskProvider, private alertCtrl: AlertController) {

  }

  resetTasks(){
    this.taskProvider.reset();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete all tasks?',
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
            this.resetTasks();
          }
        }
      ]
    });
    alert.present();
  }

}