import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HomeChooseScreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-choose-screen',
  templateUrl: 'home-choose-screen.html',
})
export class HomeChooseScreenPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomeChooseScreenPage Page');
  }

  chooserApplicant(user) {

  }
}
