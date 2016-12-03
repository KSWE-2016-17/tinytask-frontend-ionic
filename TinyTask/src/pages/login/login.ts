import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,public auth: AuthService) {}

  ionViewDidEnter() {//every load executing
	 if(this.auth.authenticated()) {
	console.log('Login successfull');
	this.navCtrl.popToRoot();
	this.navCtrl.setRoot(TabsPage);
	}
console.log(this.auth.idToken);
}

  ionViewDidLoad() {// executed for the first time loading
    console.log('Hello LoginPage Page');
   
  }
}
