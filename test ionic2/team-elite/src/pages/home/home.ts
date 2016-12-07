import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { Data } from '../providers/data';

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

  teams: any;
  constructor(public navCtrl: NavController, public dataService:Data) {
    
  }

  ionViewDidLoad() {
    this.dataService.getTeams().then(data=> this.teams= data);
  }

  intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team});
  }
}
