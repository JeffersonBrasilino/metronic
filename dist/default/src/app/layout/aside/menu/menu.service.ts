import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	constructor() {
	}

	getMenu() {
		return new Observable((ob) => {
			setTimeout(() => {
				ob.next({data: 'foifoififofiofiofiofiof'});
			}, 5000)
		})
	}
}
