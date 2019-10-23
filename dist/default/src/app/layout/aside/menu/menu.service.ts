import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../../core/services/base-http.service";
import {map, take} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class MenuService extends BaseHttpService{
	usePath = '';
	getMenu() {
		return this.post('/auth/signin', {user:'brasilino',password:'jeffdrummer'}).pipe(
			take(1),
			map((res)=>{
				console.log(res);
				let retorno = true;
				if(res.status == 'success'){
					if(res.data.token != 'null'){
						localStorage.setItem('token',res.data.token);
					}else{
						retorno = false;
					}
				}else{
					retorno = false;
				}
				return retorno;
			})
		);
	}
}
