import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth.service';

import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public viewCtrl: ViewController, public appCtrl: App, public auth: AuthService) {}


  ionViewDidLoad() {// executed for the first time loading
    console.log('Hello LoginPage Page');
  }

  login() {
	this.auth.login();
  }

  redirect() {
  this.viewCtrl.dismiss();
  this.appCtrl.getRootNav().setRoot(TabsPage);
}
}
