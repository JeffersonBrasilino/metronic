import {
	Component, EventEmitter,
	Input,
	OnChanges, OnInit,
	Output,
	TemplateRef,
	ViewChild, ViewContainerRef,
	ViewEncapsulation
} from '@angular/core';
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
};

@Component({
	selector: 'shared-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnChanges, OnInit {
	public modalOptions: ModalConfig = {
		type: 'default',
		content: {
			header: 'here`s header',
			footer: 'here`s footer',
			body: 'here`s body'
		},
		modalOptions: {},
	};

	constructor() {
	}

	ngOnInit(): void {
		console.log(this.modalOptions);
		/*this.service.emitter.subscribe((e) => {
			this.modalOptions = e;
			if (e.open == true)
				this.open();
			if (e.close == true)
				this.close()
		})*/
	}

	ngOnChanges() {
	}

	/*open() {
		this.modal = this.modalService.show(this.defaultModal, this.modalOptions.modalOptions);
		this.modal.setClass(this.modalOptions.type);

		this._emitEvent({isOpened: true});
	}

	close() {
		this.modal.hide();
		this._emitEvent({isClosed: true});
	}

	private confirmAction(action: boolean) {
		this._emitEvent({confirm: action});
	}

	private _emitEvent(event: Object) {
		let eventSend = Object.assign({}, event);
		this.modalStatus.emit(eventSend);
	}
*/
}
