import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export abstract class BaseHttpService {

	private _MAIN_URL = environment.API_HOST;
	abstract usePath: string;

	constructor(private http: HttpClient) {
	}

	protected get(path: String, data={}, usePath?: boolean, headers?: Headers): Observable<any> {
		return this.http.get(this._MAIN_URL + this.usePath + path,{params:data}).pipe(
			map((res) => {
				return {status: 'success', data: res}
			}),
			catchError((err) => {
				throw ({status: 'error', code: err.status,data:err.error});
			})
		);
	}

	protected post(path: String, data={}, usePath?: boolean, headers?: HttpHeaders): Observable<any> {
		return this.http.post(this._MAIN_URL + this.usePath + path, data).pipe(
			map((res) => {
				return {status: 'success', data: res}
			}),
			catchError((err) => {
				return of({status: 'error', code: err.status, data:err.error});
			})
		);
	}
}

