import {Injectable} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
import {Subject} from "rxjs";

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
	public static _modalServiceInstance: Array<BsModalRef> = [];
	private _modalStatusSource = new Subject<any>();
	public modalStatus$ = this._modalStatusSource.asObservable();
	private _activeModal: BsModalRef;

	constructor(private _bsModalService: BsModalService) {
	}

	open(config: ModalConfig): ModalService {
		let modal = this._activeModal = this._bsModalService.show(ModalComponent, config.modalOptions);
		modal.content.modalOptions = config;
		modal.setClass(config.type);

		modal.content.modalStatus$.subscribe((ev) => this._handlerEventComponent(ev));

		ModalService._modalServiceInstance.push(modal);
		return this;
	}

	close(modalRef?: BsModalRef) {
		if (modalRef) {
			modalRef.hide();

			const i = ModalService._modalServiceInstance.indexOf(this._activeModal);
			this._activeModal = ModalService._modalServiceInstance[i - 1];
			ModalService._modalServiceInstance.splice(i, 1);

		} else {
			for (let k in ModalService._modalServiceInstance) {
				ModalService._modalServiceInstance[k].hide();
			}

			ModalService._modalServiceInstance = [];
		}
	}

	private _handlerEventComponent(handler) {
		if (handler.isClose == true) {
			this.close(this._activeModal);
		}
		this._modalStatusSource.next(handler);
	}
}
