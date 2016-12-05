import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    
  }
  intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team});
  }
}
