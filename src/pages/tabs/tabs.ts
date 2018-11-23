import { Component } from '@angular/core';

import { TasksPage } from "../tasks/tasks";
import { SettingsPage } from '../settings/settings';
import { DonePage } from '../done/done';
import { HelpPage } from '../help/help';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TasksPage;
  tab2Root = DonePage;
  tab3Root = SettingsPage;
  tab4Root = HelpPage;

  constructor() {

  }
}
