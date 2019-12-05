import {Injectable} from '@angular/core';

@Injectable()
export class EmailTemplateService {
	private _template;

	constructor() {
		import('./email-template')
			.then((res) => {
				this._template = res.EmailTemplate;
			})
			.catch(err => {
				console.error('erro no EWmailTemplateService', err);
			})
	}

	//para um futuro proximo
	/*setTemplate() {
		import('./email-template')
			.then((res) => {
				this._template = res.EmailTemplate;
			})
			.catch(err => {
				console.error('erro no EWmailTemplateService', err);
			})
	}*/

	set header(header:string){
		this._template = this._template.replace('[header]',header);
	}

	set body(body: string){
		this._template = this._template.replace('[body]',body);
	}

	getTemplate(){
		return this._template;
	}
}
