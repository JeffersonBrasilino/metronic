import {
	Component,
	OnChanges, OnDestroy, OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { ModalDirective} from "ngx-bootstrap";

@Component({
	selector: 'shared-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnChanges, OnInit, OnDestroy {
	@ViewChild(ModalDirective, {static: false}) modalDirective: ModalDirective;
	public modalOptions = {
		type: 'default',
		message: 'aguarde...',
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
		setTimeout(() => {
		}, 2000)
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

	ngOnDestroy(): void {
		console.log('destruiu o modal');
	}

	private close() {
		console.log('fecha');
		this.modalDirective.hide();
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
