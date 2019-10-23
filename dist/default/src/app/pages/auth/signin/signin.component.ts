import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ModalService} from "../../../shared/components/modal/modal.service";
import {delay} from "rxjs/operators";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {

	loginStatus: boolean = true;

	constructor(
		private _formBuilder: FormBuilder,
		private _service: AuthService,
		private _dr: ChangeDetectorRef,
		private _router: Router,
		private _modalService: ModalService
	) {
	}

	loginForm = this._formBuilder.group({
		user: ['brasilino', Validators.required],
		password: ['jeffdrummer', Validators.required],
	});

	ngOnInit(): void {}

	login() {
		this._modalService.open({type:'loading',modalOptions:{backdrop:'static'}});
		this._service.login(this.loginForm.value)
			.pipe(
				delay(1000)
			)
			.subscribe((res) => {
					if (res == true) {
						this.loginStatus = true;
						this._router.navigateByUrl('/gerencial/usuario/list');
					} else {
						this._modalService.close();
						this.loginStatus = false;
					}
				},
				(err) => {
				},
				() => {
					this._dr.markForCheck();
				}
			);
	}

}
