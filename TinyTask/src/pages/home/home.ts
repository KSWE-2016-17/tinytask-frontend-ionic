import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeChooseScreenPage } from '../home-choose-screen/home-choose-screen'
import { HomeTaskScreenPage } from "../home-task-screen/home-task-screen";

/*
 Generated class for the Home page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

  showHomeChooseScreen() {
    this.navCtrl.push(HomeChooseScreenPage);
  }

  showTaskInfoScreen() {
    this.navCtrl.push(HomeTaskScreenPage);
  }
}
