import {
	ChangeDetectorRef,
	Component,
	OnInit,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
	selector: 'signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
//TODO: FAZER VERIFICACAO DE EMAIL NO FOCUSOUT DO CAMPO, OK
//TODO: FAZER VALIDACOES DIVERSAS AQUI NO FRONT, COLOCAR TODO O CODIGO DE ENVIO E VERIFICACOES NO SERVICO.
export class SignupComponent implements OnInit {

	submiting = false;
	errorMsg;
	checkEmailLoading = false;
	@ViewChild('dialog', {static: false}) dialogContent: TemplateRef<any>;

	constructor(
		private _fb: FormBuilder,
		private _dr: ChangeDetectorRef,
		private _service: AuthService,
		private _dialog: MatDialog
	) {
	}

	ngOnInit() {
	}

	//formulário
	form = this._fb.group({
		nome: [null, Validators.required],
		email: [null, Validators.required],
		login: [null, Validators.required],
		senha: [null, Validators.required]
	});

	//check email
	checkEmail(event) {
		let email = event.target.value;
		if (email) {
			this.checkEmailLoading = true;
			this._service.checkToken(email).subscribe(
				res => {
					this.form.get('email').setErrors(res);
					this.checkEmailLoading = false;
					this._dr.markForCheck();
				}
			);
		}
	}

	//submit do formlário
	onSubmit() {
		this.submiting = true;
		this._service.signup(Object.assign(this.form.value, {status: 0})).subscribe(
			res => {
				this.submiting = false;
				this.errorMsg = res.errorMsg;
			},
			(err) => {},
			() => {
				this._dr.markForCheck();
				this._dialog.open(this.dialogContent, {disableClose: true});
			}
		);
	}

}
