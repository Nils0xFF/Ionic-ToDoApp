import {
  Task
} from './../../classes/task';
import {
  Component
} from '@angular/core';
import {
  IonicPage
} from 'ionic-angular';
import {
  ViewController
} from 'ionic-angular';
import {
  TaskProvider
} from '../../providers/task/task.provider';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-modal',
  templateUrl: 'add-modal.html',
})
export class AddModalPage {

  inputTaskName = '';
  inputTaskDescription = '';
  failedSubmit = false;
  inputForm;

  constructor(private viewCtrl: ViewController, private taskProvider: TaskProvider, private formBuilder: FormBuilder) {
    this.inputForm = formBuilder.group({
      taskTitle: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z äüöÄÜÖ_ß]*')])]
    });
  }

  dismiss() {
    this.failedSubmit = false;
    this.viewCtrl.dismiss();
  }

  addTask() {
    if (this.inputForm.controls.taskTitle.valid) {

      this.taskProvider.addTask({
          title: this.inputForm.controls.taskTitle.value,
          description: this.inputTaskDescription,
          done: false
        } as Task);
      this.failedSubmit = false;
      this.viewCtrl.dismiss();

    } else {
      this.failedSubmit = true;
    }
  }
}
