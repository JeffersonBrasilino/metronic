import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	constructor() {}

	getMenu() {
		return new Observable((ob) => {
				ob.next({data: 'foifoififofiofiofiofiof'});
		});
	}
}
