import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { NewtaskPage } from '../pages/newtask/newtask';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { MapviewPage } from '../pages/mapview/mapview';
import { LogoutPage } from '../pages/logout/logout';
import { HomeChooseScreenPage } from '../pages/home-choose-screen/home-choose-screen';
import { HomeTaskScreenPage } from '../pages/home-task-screen/home-task-screen';

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { RestService } from '../services/rest/rest.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProfilePage,
    LoginPage,
    NewtaskPage,
    HomePage,
    SearchPage,
    MapviewPage,
    LogoutPage,
    HomeChooseScreenPage,
    HomeTaskScreenPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProfilePage,
    LoginPage,
    NewtaskPage,
    HomePage,
    SearchPage,
    MapviewPage,
    LogoutPage,
    HomeTaskScreenPage,
    HomeChooseScreenPage
  ],
  providers: [
  RestService,
	AuthService,
	{
	   provide: AuthHttp,
	   useFactory: getAuthHttp,
	   deps: [Http]
	},
	Storage
]
})
export class AppModule {}
