import {ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalComponent, ModalConfig} from "../../../shared/components/modal/modal.component";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit, OnChanges {

	@ViewChild('modal1', {static: false}) modal: ModalComponent;
	@ViewChild('modal2', {static: false}) modal2: ModalComponent;
	modal1Options: ModalConfig = {
		type: "loading",
		//message: 'Entrando...',
		modalOptions: {backdrop: "static",keyboard:false}
	};

	constructor(private dr: ChangeDetectorRef) {
	}

	ngOnInit(): void {

	}

	ngOnChanges(): void {
		console.log('mudou no signin');
	}

	openModal() {
		this.modal.open();
	}

}
