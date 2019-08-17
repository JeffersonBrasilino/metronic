import {ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalComponent, ModalConfig} from "../../../shared/components/modal/modal.component";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {delay, map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {

	@ViewChild('modal1', {static: false}) modal: ModalComponent;
	loginStatus: boolean = true;

	constructor(
		private _formBuilder: FormBuilder,
		private _service: AuthService,
		private _dr: ChangeDetectorRef,
		private _router: Router
	) {
	}

	modal1Options: ModalConfig = {
		type: "loading",
		message: 'Entrando...',
		modalOptions: {backdrop: "static", keyboard: false}
	};

	loginForm = this._formBuilder.group({
		user: ['brasilino', Validators.required],
		password: ['jeffdrummer', Validators.required],
	});

	ngOnInit(): void {

	}

	login() {
		this.modal.open();
		this._service.login(this.loginForm.value)
			.pipe(
				delay(1000)
			)
			.subscribe((res) => {
					if (res == true) {
						this.loginStatus = true;
						this._router.navigateByUrl('/user/list');
					} else {
						this.loginStatus = false;
					}
				},
				(err) => {
				},
				() => {
					this._dr.markForCheck();
					setTimeout(() => this.modal.close(), 500)
				}
			);
	}

}
