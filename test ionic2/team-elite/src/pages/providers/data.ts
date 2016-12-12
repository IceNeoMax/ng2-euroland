import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Data {

	todos: any = [];
	private baseUrl = "https://team-elite-d8aa1.firebaseio.com/";
	constructor(public http: Http) {

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
	getFollow(){
		return new Promise(resolve=>{
			this.http.get(`${this.baseUrl}/Follow.json`)
			.subscribe(res=> resolve(res.json()));
		});
	}
}

