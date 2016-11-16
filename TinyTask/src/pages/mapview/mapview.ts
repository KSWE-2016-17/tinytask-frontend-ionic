import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Mapview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html'
})
export class MapviewPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MapviewPage Page');
  }
}
