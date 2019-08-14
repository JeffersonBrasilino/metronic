import {ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalComponent, ModalConfig} from "../../../shared/components/modal/modal.component";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {

	constructor(private _formBuilder: FormBuilder) {
	}

	@ViewChild('modal1', {static: false}) modal: ModalComponent;

	modal1Options: ModalConfig = {
		type: "loading",
		message: 'Entrando...',
		modalOptions: {backdrop: "static", keyboard: false}
	};

	loginForm = this._formBuilder.group({
		username: ['teste', Validators.required],
		password: ['teste', Validators.required],
	});

	ngOnInit(): void {

	}

	login() {
		this.modal.open();
		setTimeout(() => {
			this.modal.close();
		}, 2000)
		console.log(this.loginForm.value);
	}

}
