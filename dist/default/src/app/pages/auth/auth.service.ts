import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../core/services/base-http.service";
import {catchError, map, take} from "rxjs/operators";
import {Observable, of, throwError} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class AuthService extends BaseHttpService {
	usePath = "/auth";

	login(user) {
		return this.post('/signin', user).pipe(
			take(1),
			map((res) => {
				let retorno = true;
				if (res.status == 'success') {
					if (res.data.token != 'null') {
						localStorage.setItem('token', res.data.token);
					} else {
						retorno = false;
					}
				} else {
					retorno = false;
				}
				return retorno;
			})
		);
	}

	removeToken() {
		localStorage.removeItem('token');
	}

	signup(dados): Observable<any> {
		return this.post('/signup', dados).pipe(
			map(res => {
				let retorno = {ok:true, errorMsg:''};
				if (res.status != 'success') {
					if (res.code == 400) {
						retorno.ok = false;
						retorno.errorMsg = 'Preencha o formulário corretamente.';

					} else if (res.code == 409) {
						retorno.ok = false;
						if (res.data.hasEmail == true)
							retorno.errorMsg = 'O E-mail informado já está sendo usado';
					}
				}

				return retorno;
			}),
			catchError(err => {
				return of({ok:false, errorMsg:'Algo de errado aconteceu...'});
			})
		);
	}

	checkToken(email): Observable<any> {
		return this.get('/checkEmail', {email: email}).pipe(
			map(res => {
				let retorno;
				if (res.data.hasEmail != undefined && res.data.hasEmail == true) {
					retorno = {hasEmail: true};
				} else if (res.data.email != undefined) {
					retorno = {email: true};
				}
				return retorno;
			}),
			catchError(err => {
				return of({});
			})
		);
	}
}
