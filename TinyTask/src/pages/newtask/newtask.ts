import { Injectable, Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth/auth.service';
import {RestService} from '../../services/rest/rest.service';
import { Task } from '../../app/app.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


/*
 Generated class for the Profile page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-newtask',
  templateUrl: 'newtask.html'
})
export class NewtaskPage {
  API: string = "https://tinytaskrest.herokuapp.com/tasks";
  error: string;
  auth: AuthService;

  constructor(
    public navCtrl: NavController,
    //private http: Http,
    private authHttp: AuthHttp,
    private rest: RestService
  ){}

  selectAbgabeort() {

  }

  newtask = {
    taskname: '',
    startzeit: '',
    entlohnung: '',
    deadline: '',
    description: '',
    abgabeort: '' // notwendig? irgendwie die Google Maps Daten speichern müssen wir ja
  };

  getTask(id: any) :Promise<Task> {
    const url = `${this.API}/${id}`;
    return this.authHttp.get(url)
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }

  getTask2(id: any){
      return this.rest.get('tasks',`${id}`);
  }

  getTasks(): Promise<Task[]> {
    const url = `${this.API}/`;
    return this.authHttp.get(url)
      .toPromise()
      .then(response => response.json().data as Task[])
      .catch(this.handleError);
  }

  createTask(name: string, description: string, payment: any, latitude: string, longitude: string, starts: any, category: string): Promise<Task> {
    const url = `${this.API}/`;
    return this.authHttp
      .post(url, JSON.stringify({name: name, description: description, payment: payment, position: {latitude: latitude, longitude: longitude}, starts: starts, category: category}))
      .toPromise()
      .then(res => res.json().data as Task)
      .catch(this.handleError);
  }

  createTask2(name: string, description: string, payment: any, latitude: string, longitude: string, starts: any, category: string){
    return this.rest.post('tasks', JSON.stringify({name: name, description: description, payment: payment, position: {latitude: latitude, longitude: longitude}, starts: starts, category: category}),'');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  ionViewDidLoad() {
    console.log('Hello NewTaskPage Page');
  }

}
