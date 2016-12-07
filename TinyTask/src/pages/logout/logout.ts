import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/auth/auth.service';

/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  tabBarElement: any;

  constructor(public viewCtrl: ViewController, public appCtrl: App, public auth: AuthService) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('Hello LogoutPage Page');
  }

 logout() {
	this.auth.logout();
 	this.viewCtrl.dismiss();
	this.appCtrl.getRootNav().setRoot(LoginPage);
}
}
