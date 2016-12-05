import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { TourDetailPage } from '../tour-detail/tour-detail';

@Component({
  selector: 'tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {
 
  tour:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  intoTourDetail(tour){
    this.navCtrl.push(TourDetailPage,{tour:tour});
  } 
}
