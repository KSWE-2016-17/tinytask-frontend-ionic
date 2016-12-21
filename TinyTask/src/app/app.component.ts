import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AuthService } from '../services/auth/auth.service';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
 rootPage: any = LoginPage;

  constructor(platform: Platform, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

// Schedule a token refresh on app start up
      auth.startupTokenRefresh();
      Splashscreen.hide();
    });
  }
}

export class User {
  id: string;
  displayName: string;
  email: string;
  picture: string;
  address: string;
  ratings: string;
}

export class Task {

  createdBy: string;
  assignedTo: string;
  name: string;
  description: string;
  payment: any;
  applications: string;
  starts: any;
  latitude: string;
  longitude: string;
  category: string;
}
