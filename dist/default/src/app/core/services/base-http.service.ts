import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export abstract class BaseHttpService {

	private _MAIN_URL = "http://api.unimedteresina.com.br";
	abstract usePath: string;

	constructor(private http: HttpClient) {
	}

	protected get(path: String, data?, usePath?: boolean, headers?: Headers): Observable<any> {
		return this.http.get(this._MAIN_URL + this.usePath + path).pipe(
			map((res) => {
				return 'deu certo';
			}),
			catchError((err) => {
				let a = "deu merda";
				return of(a);
			})
		);
	}

	protected post(path: String, data = {}, usePath?: boolean, headers?: HttpHeaders): Observable<any> {
		return this.http.post(this._MAIN_URL + this.usePath + path, data, {headers: headers}).pipe(
			map((res) => {
				return res;
			}),
			catchError((err) => {
				return of(err);
			})
		);
	}
}
