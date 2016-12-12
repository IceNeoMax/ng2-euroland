import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  
  team: any={};
  mem: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    let team = this.navParams.get('team');
    if(typeof(team) !== "undefined"){
			this.team = team;
      this.mem = team.Mem;
		}
    console.log(this.team);
  }

}
