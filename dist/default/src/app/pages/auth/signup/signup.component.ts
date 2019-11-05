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
export class SignupComponent implements OnInit {

	submiting = false;
	errorMsg;
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

	//submit do formlário
	onSubmit() {
		this._dialog.open(this.dialogContent, {disableClose: true});
		this.submiting = true;
		this._service.signup(Object.assign(this.form.value, {status: 0})).subscribe(
			res => {
				this.submiting = false;
				if(res.status != 'success'){
					if(res.code == 400)
						this.errorMsg = 'Preencha o formulário corretamente.';
				}
				this._dr.markForCheck();
			}
		);
	}

}
