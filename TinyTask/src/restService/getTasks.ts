/**
 * Created by eugen on 16.11.16.
 */
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class GetTasks {
  static get parameters() {
    return [[Http]];
  }

  constructor(private http:Http) {

  }

// Einen einzelnen Task holen
  getTask(task_id) {
    var url = 'http://localhost/tasks/?query=&query=' + encodeURI(task_id) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Alle tasks holen
  getAllTasks(){
    var url = 'http://localhost/tasks' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  // Längen und  Breitengrad eines Tasks holen
  getTaskPosition(task_id){
    var url = 'http://localhost/tasks/?query=&query=' + encodeURI(task_id) + '/position' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  // Alle Bewerber eines Tasks hole
  getTaskBewerber(task_id){
    var url = 'http://localhost/tasks/?query=&query=' + encodeURI(task_id) + '/applications' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Eingegrenzten Tasks holen
  getTaskOptional(radius , startzeit){
    var url = 'http://localhost/tasks/{?query=&query=' + encodeURI(radius) +',' + encodeURI(startzeit)+'}'+'&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Liste aller Benutzer holen
  getUserAll(){
    var url = 'http://localhost/users' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Eine Nutzer Bewertung holen
  getUserRating(user_id) {
    var url = 'http://localhost/users/?query=&query=' + encodeURI(user_id)+'/rating'+'&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  //Gibt bestimmten Benutzer wieder
  getUserSingle(user_id){
    var url = 'http://localhost/users/?query=&query=' + encodeURI(user_id) +'&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  // Neuen Task erstellen , wahrscheinlich überarbeiten
  newTask(newTask){
    var url = 'http://localhost/tasks' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.post(url,null,newTask);
    return response;
  }

  //Task löschen
  deleteTask(task_id){
    var url = 'http://localhost/tasks/?query=&query=' + encodeURI(task_id) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response =this.http.delete(url);
    return response;
  }

  //Benutzer hinzufügen
  newUser(){
    var url = 'http://localhost/users' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.post(url,null,null);
    return response;
  }

  //Bewertung abgeben
  newUserRating(user_id) {
    var url = 'http://localhost/users/?query=&query=' + encodeURI(user_id) + '/rating' + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.post(url,null,user_id);
    return response;
  }

  //User löschen
  deleteUser(user_id){
    var url = 'http://localhost/users/?query=&query=' + encodeURI(user_id) +'&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.delete(url);
    return response;

  }
}
