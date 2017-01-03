import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HomeTaskScreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-task-screen',
  templateUrl: 'home-task-screen.html'
})
export class HomeTaskScreenPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomeTaskScreenPage Page');
  }

  showChat() {

  }

  showMap() {

  }
}
