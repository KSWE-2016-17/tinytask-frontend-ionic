import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public auth: AuthService) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('Hello LogoutPage Page');
    this.tabBarElement.style.display = 'none';
    this.navCtrl.setRoot(LoginPage);
    this.auth.logout();
  }
}
