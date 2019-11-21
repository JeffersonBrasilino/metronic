import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../core/services/base-http.service";
import {catchError, map, take} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class AuthService extends BaseHttpService {
	usePath = "/auth";

	login(user: object): Observable<any> {
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

	signup(dados: object): Observable<any> {
		return this.post('/signup', dados).pipe(
			map(res => {
				console.log(res);
				let retorno = {ok: true, errorMsg: ''};
				if (res.status != 'success') {
					if (res.code == 400) {
						retorno.ok = false;
						retorno.errorMsg = 'Preencha o formulário corretamente.';

					} else if (res.code == 409) {
						retorno.ok = false;
						if (res.data.hasEmail == true)
							retorno.errorMsg = 'O E-mail informado já está sendo usado';
					}
				} else {
					// @ts-ignore
					this.sendEmail([dados.email],'confirmação de cadastro','olá!<br> Clique no link para ativar o seu usuário<br>'+res.data.userId, res.data.userId);
				}

				return retorno;
			}),
			catchError(err => {
				return of({ok: false, errorMsg: 'Algo de errado aconteceu...'});
			})
		);
	}

	checkToken(email: string): Observable<any> {
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

	sendEmail(sentTo: Array<any>, subject: string, content: string, secret: string) {
		this.post('/sendEmail/sendEmailSignup', {sendTo: sentTo, subject: subject, content: content, secret: secret }, false).pipe(
			map(res => {
				console.log(res);
				return res;
			})
		).subscribe();
	}
}
