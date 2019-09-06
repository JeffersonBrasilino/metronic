import {Injectable} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";

export interface ModalConfig {
	type: 'default' | 'confirm' | 'loading' | 'custom',
	message?: string,
	content?: {
		header?: string,
		body?: string,
		footer?: string
	},
	modalOptions?: ModalOptions | object,
}

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	private _modalServiceInstance = [];
	constructor(
		private _bsModalService: BsModalService,
	) {
	}

	open(config: ModalConfig): BsModalRef {
		const modal = this._bsModalService.show(ModalComponent, config.modalOptions);
		modal.content.modalOptions = config;
		modal.setClass(config.type);
		this._modalServiceInstance.push(modal);
		return modal;
	}

	close(modalRef:BsModalRef) {
		console.log(this._modalServiceInstance);
	}

	getModalInstrance(){
		return this._modalServiceInstance;
	}
}
