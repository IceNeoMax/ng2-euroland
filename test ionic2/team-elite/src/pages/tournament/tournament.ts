import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { TourDetailPage } from '../tour-detail/tour-detail';
import { Data } from '../providers/data';

@Component({
  selector: 'tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {
 
  tours:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService:Data) {
   
  }
  
   ionViewDidLoad() {
    this.dataService.getTournaments().then(data=> this.tours= data);
  }

  intoTourDetail(tour){
    this.navCtrl.push(TourDetailPage,{tour:tour});
  } 
}
