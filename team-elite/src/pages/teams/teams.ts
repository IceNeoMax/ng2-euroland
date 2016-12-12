import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../providers/data';
import { TeamDetailPage } from '../team-detail/team-detail';

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

teams: any;
tempteams:any;
follows: any;
  constructor(public navCtrl: NavController, public dataService:Data) {
    
  }

  ionViewDidLoad() {
    this.dataService.getTeams().then(data=> {this.teams= data;this.tempteams=this.teams});
    this.follows = this.dataService.getFollows();
  }

  intoTeamDetail(team){
    this.navCtrl.push(TeamDetailPage,{team:team,follow:this.follows[team.id-1],id:(team.id-1)});
  }

  getTeams(ev){
    this.teams= this.tempteams;
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.teams = this.teams.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  changeFollow(id){
    this.follows[id]=!this.follows[id];
    this.dataService.saveFollows(this.follows);
    this.dataService.getFollows();
  }

}
