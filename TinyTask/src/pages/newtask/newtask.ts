import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Newtask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-newtask',
  templateUrl: 'newtask.html'
})
export class NewtaskPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NewtaskPage Page');
  }
}
