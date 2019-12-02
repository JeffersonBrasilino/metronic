import {Injectable} from '@angular/core';

@Injectable()
export class EmailTemplateService {
	private _template;

	constructor() {
	}

	async setTemplate(){
		console.log(await import('./signup-email-template'))
	}

	getTemplate(){
		return this._template;
	}

}
