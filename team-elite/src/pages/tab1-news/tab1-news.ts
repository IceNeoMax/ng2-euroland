import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tab1Des page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab1-news',
  templateUrl: 'tab1-news.html'
})
export class Tab1NewsPage {

  star:boolean = true;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }
  changeStar(){
    this.star = !this.star;
  }
}
