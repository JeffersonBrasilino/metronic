import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../core/services/base-http.service";
import {map, take} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class AuthService extends BaseHttpService {
	usePath = "/auth";

	login(user) {
		return this.post('/signin', user).pipe(
			take(1),
			map((res)=>{
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
