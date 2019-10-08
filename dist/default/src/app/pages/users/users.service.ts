import { Injectable } from '@angular/core';
import {BaseHttpService} from "../../core/services/base-http.service";
import {Observable} from "rxjs";

export class UsersService extends BaseHttpService{
	usePath = '';
	getPosts(page=1): Observable<any>{
		return this.get('/posts?userId='+page);
	}
}
