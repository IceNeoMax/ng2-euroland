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
}

