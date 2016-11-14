import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabr_erstellen: any = ProfilePage;
  tabr_home: any = ProfilePage;
  tabr_suchen: any = ProfilePage;
  tabr_profil: any = ProfilePage;
  tabr_map: any = ProfilePage;
  tabr_logout: any = ProfilePage;

  constructor() {

  }
}
