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

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
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
    LogoutPage
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
    LogoutPage
  ],
  providers: [
	AuthService,
	{
	   provide: AuthHttp,
	   useFactory: getAuthHttp,
	   deps: [Http]
	}
]
})
export class AppModule {}
