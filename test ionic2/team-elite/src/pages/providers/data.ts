import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
@Injectable()
export class Data {

	todos: any = [];

	constructor(public http: Http, public storage: Storage) {

	}
}