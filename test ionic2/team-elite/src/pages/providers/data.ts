import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@Injectable()
export class Data {

	follows: any = [];
	private baseUrl = "https://team-elite-d8aa1.firebaseio.com/";
	constructor(public http: Http, public storage: Storage) {
	}
	getTeams(){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Teams.json`)
			.subscribe(res=> resolve(res.json()));
		});
	}
	getTeam(id){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Teams/`+(id-1)+'.json')
			.subscribe(res=> resolve(res.json()));
		});
	}
	getTournaments(){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Locations.json`)
			.subscribe(res=> resolve(res.json()));
		});
	}


	getFollows(){
		
		this.storage.get('follows').then(res=> this.follows= res);
		

			if(this.follows.length > 0){
				return this.follows;
			} 
			else {
				this.storage.set('follows',[false,false,false,false,false,false,false,false,false,false]);
				 this.storage.get('follows').then(res=> this.follows= res);
				 return this.follows;
			}
	}

	saveFollows(follows){
		this.storage.set('follows',follows);
	}
	
	

}

