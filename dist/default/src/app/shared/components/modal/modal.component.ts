import {
	Component, EventEmitter,
	Input,
	OnChanges,
	Output,
	TemplateRef,
	ViewChild,
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
export class ModalComponent implements OnChanges {
	@Input() private modalOptions: ModalConfig = {
		type: 'default',
		content: {
			header: 'here`s header',
			footer: 'here`s footer',
			body: 'here`s body'
		},
		modalOptions: {},
	};

	@ViewChild('modal', {static: false}) private defaultModal: TemplateRef<any>;
	@Output() private modalStatus = new EventEmitter();
	private modal: BsModalRef;
	private _modalStatusObj = {
		isOpened: false,
		isClosed: false,
		confirm: false
	};
	constructor(
		private modalService: BsModalService,
	) {
	}

	ngOnChanges() {}

	open() {
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

	private _emitEvent(event:Object){
		this._modalStatusObj = Object.assign(this._modalStatusObj, event);
		this.modalStatus.emit(this._modalStatusObj);
	}

}
