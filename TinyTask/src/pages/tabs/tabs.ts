import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { NewtaskPage } from '../newtask/newtask';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { MapviewPage } from '../mapview/mapview';
import { LogoutPage } from '../logout/logout';

import { LoginPage } from '../login/login';

import { App, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabr_erstellen: any = NewtaskPage;
  tabr_home: any = HomePage;
  tabr_suchen: any = SearchPage;
  tabr_profil: any = ProfilePage;
  tabr_map: any = MapviewPage;
  tabr_logout: any = LogoutPage;
  mySelectedIndex : number;

  constructor(navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App, public auth: AuthService) {

	this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

	ionViewDidLoad() {
		console.log('Hello TabsPage');
	}
}
