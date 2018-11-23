import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TasksPage } from "../pages/tasks/tasks";
import { SettingsPage } from '../pages/settings/settings';
import { DonePage } from '../pages/done/done';
import { HelpPage } from '../pages/help/help';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskProvider } from '../providers/task/task.provider';




@NgModule({
  declarations: [
    MyApp,
    TasksPage,
    DonePage,
    SettingsPage,
    HelpPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TasksPage,
    DonePage,
    SettingsPage,
    HelpPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskProvider
  ]
})
export class AppModule {}
