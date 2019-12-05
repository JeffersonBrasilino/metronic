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
import {EmailTemplateService} from "../../../shared/services/email-template/email-template.service";

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

	//formulário
	form = this._fb.group({
		nome: ['sadasd', Validators.required],
		email: ['jefferson.wendhel@gmail.com', Validators.required],
		login: ['sadasd', Validators.required],
		senha: ['sadasd', Validators.required],
		captcha: ['sadasd', Validators.required]
	});

	constructor(
		private _fb: FormBuilder,
		private _dr: ChangeDetectorRef,
		private _service: AuthService,
		private _dialog: MatDialog,
		private _emailTemplateService: EmailTemplateService
	) {
	}


	ngOnInit() {
	}

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

		//TODO TESTAR O EMAIL NO OUTLOOK PRA VER SE ESTA REALMENTE OK...
		//TODO MELHORAR MENSAGENS DAQUI DO ENVIO...

		this._emailTemplateService.header = '<div style="text-align: center"><h3>Olá!</h3></div>';
		this._emailTemplateService.body = `<div style="text-align: center"><div><h4>Obrigado por se Cadastrar!</h4></div><div>Por favor, clique no botão abaixo para ativar o seu usuário.</div><a style="margin: 10px auto;width: 100px;display: block; background: #4E9CAF;padding: 10px;text-align: center;border-radius: 5px; color: white;text-decoration: none" href="https://www.google.com" target="_blank" >Ativar Usuário</a> </div>`;

		this._service.sendEmail(['jefferson.wendhel@gmail.com'], 'teste', this._emailTemplateService.getTemplate(), '123');
		/*this.submiting = true;
		this._service.signup(Object.assign(this.form.value, {status: 0})).subscribe(
			res => {
				this.submiting = false;
				this.errorMsg = res.errorMsg;
			},
			(err) => {},
			() => {
				this._dr.markForCheck();
				this._dialog.open(this.dialogContent, {disableClose: false});
			}
		);*/
	}

	//captcha
	resolveCaptcha(val) {
		this.form.get('captcha').setValue(val);
	}

}
