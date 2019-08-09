import {
	Component,
	Input,
	OnChanges,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";

export interface ModalConfig {
	type: 'default'|'confirm'|'loading',
	message?: string,
	content?: {
		header?: string,
		body?: string,
		footer?: string
	},
	modalOptions?: ModalOptions | object
};

@Component({
	selector: 'shared-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnChanges, OnInit {
	@Input() modalOptions: ModalConfig = {
		type: 'default',
		content: {
			header: 'here`s header',
			footer: 'here`s footer',
			body: 'here`s body'
		},
		modalOptions:{}
	};
	@ViewChild('defaultModal', {static: false}) defaultModal: TemplateRef<any>;
	modal: BsModalRef;

	constructor(
		private modalService: BsModalService
	) {
	}

	ngOnChanges() {
		console.log('onChanges');
		//this.output.emit({newValue: this.input});
	}

	ngOnInit(): void {
		// let typeModal = ['default', 'confirm', 'loading'];
		// if (typeModal.includes(this.modalOptions.type) == false)
		// 	console.error('tipo de modal incorreto. modais permitidos: ' + typeModal.join(', '));

	}

	open() {
		this.modal = this.modalService.show(this.defaultModal, this.modalOptions.modalOptions);
		this.modal.setClass(this.modalOptions.type);
	}

	close(){
		this.modal.hide();
	}

}
