import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingContentIndicatorService {
	private _loadingIndicatorSource = new Subject();
	public loadingIndicatorSource$ = this._loadingIndicatorSource.asObservable();
  constructor() {
  	console.log('construtor do servico');
  }

  show(){
  	this._loadingIndicatorSource.next('show');
  }

  hide(){
  	this._loadingIndicatorSource.next('hide')
  }
}
