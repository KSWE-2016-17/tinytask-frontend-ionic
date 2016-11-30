import { Component } from '@angular/core';
import {Http, Headers} from 'angular2/http';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth/auth.service';
import 'rxjs/add/operator/map';

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
  API: string = "https://tinytaskrest.herokuapp.com/tasks/";

  error: string;
  auth: AuthService;
  constructor(
    public navCtrl: NavController,
    //private http: Http,
    private authHttp: AuthHttp,
    private headers = new Headers(
      {'Content-Type': 'application/json'}),
    private name: string,
    private description: string,
    private payment: number,
    private latitude: number,
    private longitude: number,
    private starts: string,
    private category: string
    ){

  }
  //so ähnlich
  postNewTask() {
    return this.authHttp.post(`${this.API}`, JSON.stringify({
      name: this.name,
      description: this.description,
      payment: this.payment,
      position: {latitude: this.latitude, longitude: this.longitude},
      starts: this.starts,
      category: this.category
    }), {headers: this.headers}).map(res => res.text()).subscribe(err => this.error = err);
  }

  ionViewDidLoad() {
    console.log('Hello NewtaskPage Page');
  }

}
