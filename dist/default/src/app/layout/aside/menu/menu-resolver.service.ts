import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {MenuService} from "./menu.service";

@Injectable({
	providedIn: 'root'
})
export class MenuResolverService implements Resolve<any> {

	constructor(private _service: MenuService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		return this._service.getMenu().pipe(
			take(1)
		);
	}
}
