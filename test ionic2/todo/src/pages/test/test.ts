import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

 
    constructor(public navCtrl: NavController,public element:ElementRef) {
 
       
    }
 
      ionViewDidLoad(){
	}
 
    
 
}
