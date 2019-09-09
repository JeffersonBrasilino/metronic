import {
	Component,
	OnChanges, OnDestroy, OnInit,
	ViewEncapsulation
} from '@angular/core';
import {Subject} from "rxjs";

@Component({
	selector: 'shared-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnChanges, OnInit, OnDestroy {
	private _modalStatusSource = new Subject<any>();
	public modalStatus$ = this._modalStatusSource.asObservable();

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
	}

	ngOnChanges() {
	}

	ngOnDestroy(): void {
		this._modalStatusSource.unsubscribe();
	}

	private close() {
		this._modalStatusSource.next({isClose: true});
	}

	private confirmAction(action: boolean) {
		this._modalStatusSource.next({confirm: action});
	}
}
